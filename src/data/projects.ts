export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "unicorn",
    name: "Unicorn — Room Matching Platform",
    description:
      "Bilkent CS102 capstone project. Android app that matches students based on lifestyle, music taste, and daily habits. Firebase Authentication for identity, Realtime Database for cloud-synced profiles and events; includes roommate matching, social connections, and used textbook marketplace modules.",
    technologies: ["Java", "Android", "Firebase", "Gradle"],
    githubUrl: "https://github.com/farabisina25/CS102-Project-Unicorn",
  },
  {
    id: "three-shell-game",
    name: "Three Shell Game",
    description:
      "Unity mobile game built during the Creasaur internship. Implements the classic shell game with a ball hidden under one of three cups and randomized movements; players score by picking the correct cup. Game loop, animations, and score management structured with modular C# scripts.",
    technologies: ["C#", "Unity", "Mobile"],
    githubUrl: "https://github.com/farabisina25/three_shell_game",
  },
  {
    id: "bowling-game",
    name: "Bowling Game",
    description:
      "Physics-driven bowling simulation in Unity. Ball–pin collisions modeled with Rigidbody physics; levels complete when all pins fall, with progressively increasing difficulty. Built level progression, physics tuning, and game state management during the Creasaur internship.",
    technologies: ["C#", "Unity", "Rigidbody", "Mobile"],
    githubUrl: "https://github.com/farabisina25/bowling_game",
  },
  {
    id: "cs319",
    name: "CS319 Full-Stack Web Application",
    description:
      "Bilkent CS319 capstone project. Three-tier full-stack architecture with a Node.js REST API, React SPA, and PostgreSQL. Covers authentication, relational data modeling, and end-to-end web development with a clear frontend–backend separation.",
    technologies: ["Node.js", "React", "PostgreSQL", "JavaScript"],
    githubUrl: "https://github.com/farabisina25/CS319-Project",
  },
  {
    id: "cs353",
    name: "CS353 Database Management System",
    description:
      "Bilkent CS353 capstone project. RESTful Flask backend, PostgreSQL for relational data management, and ReportLab for PDF report generation. Multi-container deployment with Docker Compose; includes schema design, query optimization, and a containerized dev environment.",
    technologies: ["Flask", "Python", "PostgreSQL", "Docker", "ReportLab"],
    githubUrl: "https://github.com/farabisina25/CS353-Project",
  },
  {
    id: "football-app",
    name: "Football Draft — Fantasy Squad Game",
    description:
      "Turn-based football draft game with wheel-based team selection, unique player pool drafting, and turn tracking. PHP/MySQL backend for session management, JavaScript frontend for interactive UI, and LocalStorage for client-side state persistence.",
    technologies: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/farabisina25/football-app",
  },
  {
    id: "x-clone-rn",
    name: "X Clone — React Native Social App",
    description:
      "Mobile social app inspired by X (Twitter). Cross-platform client with React Native + Expo, Node.js REST API backend, and MongoDB for users and posts. Arcjet rate limiting, Cloudinary media uploads; mobile/backend monorepo deployed on Vercel.",
    technologies: [
      "React Native",
      "TypeScript",
      "MongoDB",
      "Expo",
      "Cloudinary",
    ],
    githubUrl: "https://github.com/farabisina25/x-clone-rn",
  },
  {
    id: "echofinder",
    name: "EchoFinder — AI GitHub Issue Bot",
    description:
      "Bilkent CS458 capstone project. Probot-based bot for semantic duplicate detection on GitHub issues. Sentence-BERT embeddings generated in a FastAPI microservice, similarity search with PostgreSQL + pgvector, and Google Gemini for merge previews. Multi-service deployment via Docker Compose.",
    technologies: [
      "Node.js",
      "Probot",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Docker",
    ],
    githubUrl: "https://github.com/farabisina25/echofinder-test",
  },
];
