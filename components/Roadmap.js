"use client";

import { useState } from "react";
import { STAGES } from "../lib/data";

function Check() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6.5L4.8 9.2L10 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Roadmap({ completed, toggleTopic, pct }) {
  const [open, setOpen] = useState({ foundations: true });

  const toggleStage = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

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
                  return (
                    <div
                      key={key}
                      className={`topic${on ? " done" : ""}`}
                      onClick={() => toggleTopic(key)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleTopic(key);
                        }
                      }}
                      role="checkbox"
                      aria-checked={on}
                      tabIndex={0}
                    >
                      <span className={`checkbox${on ? " on" : ""}`}>
                        <Check />
                      </span>
                      <span>
                        <span className="topic-name">{topic.name}</span>
                        <br />
                        <span className="topic-why">{topic.why}</span>
                      </span>
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
