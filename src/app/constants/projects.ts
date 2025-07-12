import { imageUrls } from "./skills";

export const projects: {
  [key: string]: {
    imageUrl: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    buttons: string[];
  };
} = {
  algoMinds: {
    imageUrl: imageUrls.algoMinds,
    title: "AlgoMinds",
    description:
      "AlgoMinds is a multiplayer LeetCode-style coding platform with real-time feedback, submission tracking, and a custom Judge0 integration. Users can solve algorithm challenges, compete, and get AI-generated hints. Built with Express, WebSockets, React, and PostgreSQL, it's designed to level up problem-solving at scale.",
    tags: ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
    link: "/algoMinds.png",
    buttons: ["View Github", "View Devpost"],
  },
  debateGuard: {
    imageUrl: imageUrls.debateGuard,
    title: "DebateGuard",
    description:
      "DebateGuard is a debate timer and score-tracking tool designed for competitive speech and debate events. It streamlines round management, tracks speaking time, and enables judges to assign scores live. Built with React, Tailwind, and localStorage for a seamless offline-first experience.",
    tags: ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
    link: "/debateguard.png",
    buttons: ["View Github", "View Devpost"],
  },
  forkcast: {
    imageUrl: imageUrls.forkcast,
    title: "Forkcast",
    description:
      "Forkcast is a restaurant forecasting web app that leverages machine learning (XGBoost) to predict daily item-level demand based on historical POS data. It helps restaurants reduce food waste and optimize inventory decisions. Built with FastAPI, Supabase, and React, with secure CSV ingestion and forecast visualization.",
    tags: ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
    link: "/forkcast.png",
    buttons: ["View Github", "View Devpost"],
  },
};
