"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LayoutGroup } from "framer-motion";

type HeadshotContextValue = {
  isPastHero: boolean;
  heroRef: React.RefObject<HTMLDivElement | null>;
};

const HeadshotContext = createContext<HeadshotContextValue | null>(null);

// Fallback used when the hook is rendered outside a provider (e.g. the
// accidental /components/landingPage route Next.js generates). Defaults to no
// animation so it stays inert rather than throwing during prerender.
const fallbackValue: HeadshotContextValue = {
  isPastHero: false,
  heroRef: { current: null },
};

export const useHeadshot = () => {
  return useContext(HeadshotContext) ?? fallbackValue;
};

export const HeadshotProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPastHero, setIsPastHero] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the hero headshot is no longer visible, show it in the navbar.
        setIsPastHero(!entry.isIntersecting);
      },
      { threshold: .875}
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <HeadshotContext.Provider value={{ isPastHero, heroRef }}>
      <LayoutGroup>{children}</LayoutGroup>
    </HeadshotContext.Provider>
  );
};
