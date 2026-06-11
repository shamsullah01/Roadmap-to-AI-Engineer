"use client";

import { useState } from "react";
import { STAGES, TOPIC_KEYS } from "../lib/data";

function Check() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6.5L4.8 9.2L10 3.5" stroke="#04130b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Lock() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="2.5" y="5.5" width="7" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function Roadmap({ completed, toggleTopic, isUnlocked, pct }) {
  const [open, setOpen] = useState({ foundations: true });
  const [openTopic, setOpenTopic] = useState(null);

  const toggleStage = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  const openLesson = (key, locked) => {
    if (locked) return;
    setOpenTopic((cur) => (cur === key ? null : key));
  };

  // Mark the current topic done, then open the next one so the user keeps moving.
  const completeTopic = (key) => {
    toggleTopic(key); // marks it complete (it's unlocked + not done)
    const i = TOPIC_KEYS.indexOf(key);
    const nextKey = TOPIC_KEYS[i + 1];
    if (nextKey) {
      const nextStage = nextKey.split(".")[0];
      setOpen((o) => ({ ...o, [nextStage]: true }));
      setOpenTopic(nextKey);
    } else {
      setOpenTopic(null);
    }
  };

  return (
    <div className="rail">
      <div className="rail-fill" style={{ height: `${pct}%` }} />
      {STAGES.map((stage) => {
        const done = stage.topics.filter((t) => completed[`${stage.id}.${t.id}`]).length;
        const total = stage.topics.length;
        const isOpen = !!open[stage.id];
        const nodeClass = done === total ? "full" : done > 0 ? "partial" : "";
        const countClass = done === total ? "complete" : done > 0 ? "started" : "";

        return (
          <section key={stage.id} id={stage.id} className={`stage${isOpen ? " open" : ""}`}>
            <div className={`node ${nodeClass}`} aria-hidden="true" />
            <button
              className="stage-head"
              onClick={() => toggleStage(stage.id)}
              aria-expanded={isOpen}
            >
              <span className="mono">{stage.index}</span>
              <span className="stage-title">{stage.title}</span>
              <span className="stage-meta">
                <span className={`mono stage-count ${countClass}`}>
                  {done}/{total} · {stage.weeks}
                </span>
                <span className="chev" aria-hidden="true" />
              </span>
            </button>

            {isOpen && (
              <div className="stage-body">
                <p className="stage-blurb">{stage.blurb}</p>
                {stage.topics.map((topic) => {
                  const key = `${stage.id}.${topic.id}`;
                  const on = !!completed[key];
                  const locked = !on && !isUnlocked(key);
                  const lessonOpen = openTopic === key;
                  const status = on ? "done" : locked ? "locked" : "start";

                  return (
                    <div
                      key={key}
                      className={`topic${on ? " done" : ""}${locked ? " locked" : ""}${
                        lessonOpen ? " open" : ""
                      }`}
                    >
                      <div
                        className="topic-head"
                        onClick={() => openLesson(key, locked)}
                        onKeyDown={(e) => {
                          if (!locked && (e.key === "Enter" || e.key === " ")) {
                            e.preventDefault();
                            openLesson(key, locked);
                          }
                        }}
                        role="button"
                        aria-expanded={lessonOpen}
                        aria-disabled={locked}
                        title={locked ? "Complete the topic above to unlock this one" : undefined}
                        tabIndex={locked ? -1 : 0}
                      >
                        <span className={`checkbox${on ? " on" : ""}`}>
                          {locked ? <Lock /> : on ? <Check /> : null}
                        </span>
                        <span className="topic-body">
                          <span className="topic-name">{topic.name}</span>
                          <br />
                          <span className="topic-why">{topic.why}</span>
                        </span>
                        <span className={`topic-status${status === "start" ? " next" : ""}`}>
                          {status}
                        </span>
                      </div>

                      {lessonOpen && (
                        <div className="lesson">
                          <div className="lesson-cmd mono">$ cover {topic.id}</div>
                          <ul className="lesson-list">
                            {(topic.learn || []).map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                          <div className="lesson-foot">
                            {on ? (
                              <>
                                <span className="lesson-done mono">✓ completed</span>
                                <button
                                  className="lesson-reset"
                                  onClick={() => toggleTopic(key)}
                                >
                                  mark incomplete
                                </button>
                              </>
                            ) : (
                              <button className="btn" onClick={() => completeTopic(key)}>
                                mark as complete
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
