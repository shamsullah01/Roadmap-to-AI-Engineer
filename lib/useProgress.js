"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LEVELS, TOPIC_XP, TOTAL_TOPICS } from "./data";
import { loadRemote, saveRemote, syncEnabled } from "./sync";

const KEY = "pathweights-v1";

export function useProgress() {
  const [completed, setCompleted] = useState({});
  const [quizXp, setQuizXp] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [syncState, setSyncState] = useState(syncEnabled ? "connecting" : "local");
  const saveTimer = useRef(null);

  useEffect(() => {
    let local = null;
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) local = JSON.parse(raw);
    } catch {}

    if (local) {
      setCompleted(local.completed || {});
      setQuizXp(local.quizXp || 0);
    }

    if (!syncEnabled) {
      setHydrated(true);
      return;
    }

    loadRemote().then((remote) => {
      if (remote) {
        setCompleted(remote.completed || {});
        setQuizXp(remote.quizXp || 0);
        setSyncState("synced");
      } else if (local && (Object.keys(local.completed || {}).length || local.quizXp)) {
        saveRemote(local).then(() => setSyncState("synced"));
      } else {
        setSyncState("synced");
      }
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const payload = { completed, quizXp };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(payload));
    } catch {}

    if (syncEnabled) {
      clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => saveRemote(payload), 900);
    }
    return () => clearTimeout(saveTimer.current);
  }, [completed, quizXp, hydrated]);

  const toggleTopic = (id) => setCompleted((c) => ({ ...c, [id]: !c[id] }));

  const addXp = (amount) => setQuizXp((x) => x + amount);

  const reset = () => {
    setCompleted({});
    setQuizXp(0);
  };

  const derived = useMemo(() => {
    const topicsDone = Object.values(completed).filter(Boolean).length;
    const xp = quizXp + topicsDone * TOPIC_XP;

    let level = LEVELS[0];
    let next = null;
    for (let i = 0; i < LEVELS.length; i++) {
      if (xp >= LEVELS[i].at) {
        level = LEVELS[i];
        next = LEVELS[i + 1] || null;
      }
    }
    const floor = level.at;
    const ceil = next ? next.at : xp || 1;
    const levelProgress = next
      ? Math.min(100, Math.round(((xp - floor) / (ceil - floor)) * 100))
      : 100;

    return {
      topicsDone,
      totalTopics: TOTAL_TOPICS,
      xp,
      level,
      next,
      levelProgress,
      pct: Math.round((topicsDone / TOTAL_TOPICS) * 100),
    };
  }, [completed, quizXp]);

  return { completed, toggleTopic, addXp, reset, hydrated, syncState, ...derived };
}
