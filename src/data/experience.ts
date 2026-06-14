export type TimelineEntryType = "work" | "education";

export interface TimelineEntry {
  id: string;
  type: TimelineEntryType;
  title: string;
  organization: string;
  location?: string;
  period: string;
  description?: string;
}

export const timeline: TimelineEntry[] = [
  {
    id: "jotform-backend-support",
    type: "work",
    title: "Backend Support Engineer",
    organization: "Jotform",
    location: "Ankara, Turkey",
    period: "Nov 2025 – 2026",
    description:
      "Provided operational support for backend infrastructure, production issue triage, and coordination with development teams.",
  },
  {
    id: "netas-cloud-intern",
    type: "work",
    title: "Cloud Services Intern",
    organization: "NETAŞ",
    location: "Turkey",
    period: "Aug 2025 – Sep 2025",
    description:
      "Summer internship focused on cloud services and infrastructure operations in enterprise cloud environments.",
  },
  {
    id: "jotform-backend-intern",
    type: "work",
    title: "Backend Developer Intern",
    organization: "Jotform",
    location: "Ankara, Turkey",
    period: "Jun 2025 – Jul 2025",
    description:
      "Contributed to backend development workflows including API layers, service logic, and team code review practices.",
  },
  {
    id: "creasaur-game-intern",
    type: "work",
    title: "Game Development Intern",
    organization: "Creasaur Teknoloji Ticaret A.Ş.",
    location: "Turkey",
    period: "Jun 2024 – Jul 2024",
    description:
      "Built mobile games with Unity and C#, working on physics-based mechanics and level design.",
  },
  {
    id: "yks-mentor",
    type: "work",
    title: "Student Mentor",
    organization: "YKS Boğaziçi",
    location: "Turkey",
    period: "2023 – 2024",
    description:
      "Volunteer mentorship for high school students on university applications and career planning.",
  },
  {
    id: "bsc-cs",
    type: "education",
    title: "B.S. in Computer Science",
    organization: "Bilkent University, Faculty of Engineering",
    location: "Ankara, Turkey",
    period: "2021 – 2026",
    description:
      "Coursework in data structures, algorithms, software engineering, databases, and artificial intelligence. Member of the Bilkent ACM community.",
  },
];
