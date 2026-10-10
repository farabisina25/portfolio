export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  videoId?: string;
  /** Portrait gameplay, such as a YouTube Short. */
  verticalVideo?: boolean;
  caseStudyHref?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "element-crash",
    name: "Element Crash",
    description:
      "A Royal Match–style match puzzle built in Unity 6. Tap connected groups of same-colored cubes to clear them within a move limit. Larger groups become rockets or TNT, and the board includes stones, vases, and chalice boxes. Written in C# with a model/view split and JSON-driven levels.",
    technologies: ["Unity 6", "C#", "uGUI", "Input System"],
    videoId: "YnG2MRLdEYI",
    caseStudyHref: "/projects/element-crash",
    githubUrl: "https://github.com/farabisina25/DreamGames_CaseStudy",
    featured: true,
  },
  {
    id: "swordman",
    name: "Swordman",
    description:
      "A top-down 2D arena brawler for four fighters. Swords picked off the ground orbit you and hit on contact — there is no attack button. Blade clashes break both swords, a body hit costs one of three hit points, and a kill pays a three-sword bounty. Built in Unity 6 with C#, URP 2D, and Physics2D.",
    technologies: ["Unity 6", "C#", "URP 2D", "Physics2D"],
    videoId: "OHZ-3Nr9CoI",
    verticalVideo: true,
    caseStudyHref: "/projects/swordman",
    githubUrl: "https://github.com/farabisina25/LoopGames_Case",
    featured: true,
  },
  {
    id: "wheel-gamble",
    name: "Gamble Wheel",
    description:
      "A push-your-luck wheel-of-fortune game for Android, built in Unity 2021.3 LTS. Spin for growing rewards, risk a bomb that wipes the run, and cash out only on bomb-free silver and golden zones. Written in C# with an MVP architecture, DOTween, and TextMeshPro.",
    technologies: ["Unity 2021.3", "C#", "DOTween", "TextMeshPro"],
    videoId: "0culSJfXpaw",
    caseStudyHref: "/projects/wheel-gamble",
    githubUrl: "https://github.com/farabisina25/Vertigo_Case",
    featured: true,
  },
  {
    id: "action-rpg",
    name: "Legend of the Forest",
    description:
      "A 2D top-down action RPG built in Unity 6. Three weapons, a stamina-based dash, enemies with distinct attack patterns, destructible props, and fade transitions between scenes. Written in C# with URP, Cinemachine, the New Input System, ScriptableObjects, and 2D Tilemaps.",
    technologies: ["Unity 6", "C#", "URP 2D", "Cinemachine"],
    videoId: "Qnb2fV45Fnw",
    caseStudyHref: "/projects/action-rpg",
    githubUrl: "https://github.com/farabisina25/LegendOfTheForest",
    featured: true,
  },
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
