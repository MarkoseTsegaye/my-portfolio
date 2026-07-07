export type ExperienceItem = {
  role: string;
  company: string;
  team?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Credit Acceptance",
    team: "Mobile Consumer Experience",
    location: "Remote",
    start: "May 2026",
    end: "Aug 2026",
    highlights: [
      "Built React Native flows for payments and loan details in the new Credit Acceptance app and website, serving 4M+ users.",
      "Leveraged agentic AI for migration, code generation, and testing, cutting the rewrite timeline from 18 months to 3.",
      "Implemented PII masking, security compliance checks, and secure bank integrations for payment processing flows.",
      "Integrated RESTful APIs to sync account and payment data between the React Native app and Spring Boot backend.",
    ],
    stack: ["React Native", "Spring Boot", "REST APIs", "Agentic AI"],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  detail: string;
  location: string;
  timeline: string;
};

export const education: EducationItem[] = [
  {
    school: "George Mason University",
    degree: "B.S. Computer Science",
    detail: "Accelerated M.S. Track · 3.67 GPA",
    location: "Fairfax, VA",
    timeline: "Dec 2026",
  },
  {
    school: "George Mason University",
    degree: "Accelerated M.S. Computer Science",
    detail: "Graduate coursework alongside undergraduate degree",
    location: "Fairfax, VA",
    timeline: "Expected Dec 2027",
  },
];

export type LeadershipItem = {
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
};

export const leadership: LeadershipItem[] = [
  {
    role: "Event Coordinator",
    organization: "ColorStack GMU",
    location: "Fairfax, VA",
    start: "Oct 2025",
    end: "Present",
    current: true,
    highlights: [
      "Coordinate logistics for 12+ events per semester — venue booking, university partnerships, catering, and attendance — averaging 20–30 members per event.",
      "Support a chapter of 100+ underrepresented CS students by connecting members with industry partners for internship and mentorship opportunities.",
    ],
  },
];
