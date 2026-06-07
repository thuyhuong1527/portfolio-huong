export interface Project {
  id: number;
  title: string;
  category: string;
  shortDesc: string;
  goal: string;
  process: string;
  evidence: string;
  product: string;
  learningOutcomes: string[];
  skillsGained: string[];
  projectHighlights: string[];
  themeColor: string; // background gradient or vintage color motif
  iconName: string; // Lucide icon mapping to represent each task beautifully
  imageUrl?: string; // Optional image representing the project
}

export interface SkillTag {
  id: number;
  name: string;
  level?: string;
}

export interface ReflectionNode {
  title: string;
  content: string;
  iconName: string;
  badge?: string;
  details?: string[];
}

export interface FeedbackFormInput {
  name: string;
  email: string;
  message: string;
}
