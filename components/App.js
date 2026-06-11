"use client";

import Roadmap from "./Roadmap";
import ThemeToggle from "./ThemeToggle";
import Quiz from "./Quiz";
import { STAGES } from "../lib/data";
import { useProgress } from "../lib/useProgress";

export default function App() {
  const p = useProgress();

  return (
    <>
      <header className="shell topbar">
        <span className="wordmark">
          path<span>weights</span>
        </span>
        <span className="topbar-right">
          <span className="mono">v1.1 · self-paced</span>
          <ThemeToggle />
        </span>
      </header>

      <section className="shell hero">
        <div className="term-window">
          <div className="term-bar">
            <span className="dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="term-title">~/pathweights — bash</span>
            <span className="term-meta mono">6 stages · {p.totalTopics} topics · 1 quiz</span>
          </div>
          <div className="term-body">
            <p className="mono eyebrow">./pathweights --become ai-engineer</p>
            <h1>
              Learn to be an <em>AI engineer.</em> Keep score while you do it.
              <span className="cursor" aria-hidden="true">
                ▋
              </span>
            </h1>
            <p className="hero-lede">
              A curriculum that runs from Python basics to production LLM systems, in the order
              working engineers actually learn it. Check off topics as you study, then run the
              checkpoint quiz to prove it — your progress is saved on this device.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="mono">topics_complete</span>
                <strong>
                  {p.topicsDone}/{p.totalTopics}
                </strong>
              </div>
              <div className="stat">
                <span className="mono">total_xp</span>
                <strong className="gold">{p.xp}</strong>
              </div>
              <div className="stat">
                <span className="mono">current_level</span>
                <strong>{p.level.name}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="shell workspace">
        <aside className="sidebar">
          <div className="level-card">
            <span className="mono">level</span>
            <div className="level-name">{p.level.name}</div>
            <div className="xp-track">
              <div style={{ width: `${p.levelProgress}%` }} />
            </div>
            <div className="xp-row">
              <span className="mono">{p.xp} xp</span>
              <span className="mono">{p.next ? `next: ${p.next.name} at ${p.next.at}` : "max level"}</span>
            </div>
          </div>

          <nav className="stage-nav" aria-label="Stages">
            {STAGES.map((s) => {
              const done = s.topics.every((t) => p.completed[`${s.id}.${t.id}`]);
              return (
                <a key={s.id} href={`#${s.id}`}>
                  <span className="mono">{s.index}</span>
                  {s.title}
                  <span className={`tick${done ? " done" : ""}`} />
                </a>
              );
            })}
          </nav>

          <button
            className="reset-btn"
            onClick={() => {
              if (window.confirm("Clear all progress and XP on this device?")) p.reset();
            }}
          >
            Reset progress
          </button>
        </aside>

        <Roadmap completed={p.completed} toggleTopic={p.toggleTopic} isUnlocked={p.isUnlocked} pct={p.pct} />
      </main>

      <section className="shell checkpoint" id="checkpoint">
        <div className="checkpoint-head">
          <h2>Checkpoint</h2>
          <span className="mono">
            in training runs, a checkpoint is where you save and evaluate. same idea.
          </span>
        </div>
        <Quiz addXp={p.addXp} />
      </section>

      <footer className="shell footer">
        <span>Built for people teaching themselves the field.</span>
        <span className="mono">
          {p.syncState === "local"
            ? "progress stored locally · nothing leaves your browser"
            : p.syncState === "synced"
            ? "progress synced · supabase connected"
            : "connecting to sync…"}
        </span>
      </footer>
    </>
  );
}
