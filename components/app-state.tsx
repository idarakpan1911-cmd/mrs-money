"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type JourneyState = {
  completedLessons: string[];
  savedPrayers: string[];
  faithPoints: number;
  completeLesson: (id: string) => void;
  togglePrayer: (id: string) => void;
};

const JourneyContext = createContext<JourneyState | undefined>(undefined);
const storageKey = "lumen-journey-v1";

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [savedPrayers, setSavedPrayers] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      const state = JSON.parse(saved) as { completedLessons?: string[]; savedPrayers?: string[] };
      setCompletedLessons(state.completedLessons ?? []);
      setSavedPrayers(state.savedPrayers ?? []);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(storageKey, JSON.stringify({ completedLessons, savedPrayers }));
  }, [completedLessons, hydrated, savedPrayers]);

  const value = useMemo(() => ({
    completedLessons,
    savedPrayers,
    faithPoints: 450 + completedLessons.length * 10,
    completeLesson: (id: string) => setCompletedLessons(current => current.includes(id) ? current : [...current, id]),
    togglePrayer: (id: string) => setSavedPrayers(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]),
  }), [completedLessons, savedPrayers]);

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}

export function useJourney() {
  const state = useContext(JourneyContext);
  if (!state) throw new Error("useJourney must be used inside JourneyProvider");
  return state;
}
