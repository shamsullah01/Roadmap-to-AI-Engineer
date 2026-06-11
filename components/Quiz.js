"use client";

import { useEffect, useMemo, useState } from "react";
import { QUESTIONS, QUESTION_XP, STAGES, STREAK_BONUS } from "../lib/data";

const KEYS = ["A", "B", "C", "D"];
const MISSED_KEY = "pathweights-missed-v1";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz({ addXp }) {
  const [phase, setPhase] = useState("intro");
  const [mode, setMode] = useState("full");
  const [deck, setDeck] = useState([]);
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState(null);
  const [results, setResults] = useState([]);
  const [runXp, setRunXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [missed, setMissed] = useState([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(MISSED_KEY);
      if (raw) setMissed(JSON.parse(raw));
    } catch {}
  }, []);

  const persistMissed = (next) => {
    setMissed(next);
    try {
      window.localStorage.setItem(MISSED_KEY, JSON.stringify(next));
    } catch {}
  };

  const start = (runMode = "full") => {
    const pool =
      runMode === "review" ? QUESTIONS.filter((q) => missed.includes(q.id)) : QUESTIONS;
    setMode(runMode);
    setDeck(shuffle(pool));
    setCurrent(0);
    setPicked(null);
    setResults([]);
    setRunXp(0);
    setStreak(0);
    setPhase("playing");
  };

  const choose = (idx) => {
    if (picked !== null) return;
    const q = deck[current];
    const hit = idx === q.answer;
    setPicked(idx);
    setResults((r) => [...r, { stage: q.stage, hit }]);

    if (hit) {
      persistMissed(missed.filter((id) => id !== q.id));
      const nextStreak = streak + 1;
      const bonus = nextStreak % 3 === 0 ? STREAK_BONUS : 0;
      const gain = QUESTION_XP + bonus;
      setStreak(nextStreak);
      setRunXp((x) => x + gain);
      addXp(gain);
    } else {
      if (!missed.includes(q.id)) persistMissed([...missed, q.id]);
      setStreak(0);
    }
  };

  const next = () => {
    if (current + 1 >= deck.length) {
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  };

  const breakdown = useMemo(() => {
    if (phase !== "done") return [];
    return STAGES.map((s) => {
      const rows = results.filter((r) => r.stage === s.id);
      if (!rows.length) return null;
      const hits = rows.filter((r) => r.hit).length;
      return { index: s.index, title: s.title, hits, total: rows.length };
    }).filter(Boolean);
  }, [phase, results]);

  const hits = results.filter((r) => r.hit).length;

  if (phase === "intro") {
    return (
      <div className="quiz-card quiz-intro">
        <p>
          {QUESTIONS.length} questions drawn from every stage of the roadmap. A correct answer
          earns {QUESTION_XP} XP, and every third answer in a row adds a streak bonus. Wrong
          answers cost nothing — each one comes with a short explanation, which is the point.
          Questions you miss go into a review pile until you get them right.
        </p>
        <div className="result-actions">
          <button className="btn" onClick={() => start("full")}>
            Run checkpoint
          </button>
          {missed.length > 0 && (
            <button className="btn ghost" onClick={() => start("review")}>
              Review missed ({missed.length})
            </button>
          )}
        </div>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="quiz-card">
        <span className="mono" style={{ color: "var(--ink-faint)" }}>
          {mode === "review" ? "review complete" : "checkpoint complete"}
        </span>
        <div className="result-score">
          {hits}/{deck.length}
        </div>
        <p className="result-sub">
          You earned <span className="gold-text">{runXp} XP</span> this run.{" "}
          {missed.length === 0
            ? "Your review pile is empty — nothing left to clear."
            : hits === deck.length
            ? "A clean sweep — time to build something."
            : `${missed.length} question${missed.length > 1 ? "s" : ""} in the review pile. Clear it to lock the knowledge in.`}
        </p>

        <div className="breakdown">
          {breakdown.map((b) => (
            <div className="breakdown-row" key={b.index}>
              <span className="mono">{b.index}</span>
              <span className="label">{b.title}</span>
              <span className="breakdown-bar">
                <div style={{ width: `${(b.hits / b.total) * 100}%` }} />
              </span>
              <span className="mono">
                {b.hits}/{b.total}
              </span>
            </div>
          ))}
        </div>

        <div className="result-actions">
          {missed.length > 0 && (
            <button className="btn" onClick={() => start("review")}>
              Review missed ({missed.length})
            </button>
          )}
          <button className={missed.length > 0 ? "btn ghost" : "btn"} onClick={() => start("full")}>
            Run the full checkpoint
          </button>
        </div>
      </div>
    );
  }

  const q = deck[current];
  const stageTitle = STAGES.find((s) => s.id === q.stage)?.title || "";
  const answered = picked !== null;
  const hit = answered && picked === q.answer;

  return (
    <div className="quiz-card">
      <div className="q-progress" aria-hidden="true">
        {deck.map((_, i) => {
          let cls = "";
          if (i < results.length) cls = results[i].hit ? "hit" : "miss";
          else if (i === current) cls = "now";
          return <span key={i} className={cls} />;
        })}
      </div>

      <span className="mono q-tag">
        {mode === "review" ? `review · ${stageTitle}` : stageTitle}
      </span>
      <h3 className="q-text">{q.q}</h3>

      <div className="options">
        {q.options.map((opt, i) => {
          let cls = "option";
          if (answered) {
            if (i === q.answer) cls += " correct";
            else if (i === picked) cls += " wrong";
          }
          return (
            <button key={i} className={cls} onClick={() => choose(i)} disabled={answered}>
              <span className="mono key">{KEYS[i]}</span>
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className={`feedback ${hit ? "good" : "bad"}`}>
          <strong>
            {hit
              ? `Correct — +${QUESTION_XP + (streak % 3 === 0 ? STREAK_BONUS : 0)} XP${
                  streak > 1 ? ` · streak ×${streak}` : ""
                }`
              : `Not quite — the answer is "${q.options[q.answer]}"`}
          </strong>
          <span className="note">{q.note}</span>
        </div>
      )}

      <div className="quiz-foot">
        <span className="mono">
          {current + 1} / {deck.length} · run xp <span className="gold-text">{runXp}</span>
        </span>
        {answered && (
          <button className="btn" onClick={next}>
            {current + 1 >= deck.length ? "See results" : "Next question"}
          </button>
        )}
      </div>
    </div>
  );
}
