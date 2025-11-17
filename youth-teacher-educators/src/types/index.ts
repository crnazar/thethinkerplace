export interface TabInfo {
  id: string;
  title: string;
  path: string;
  description: string;
}

export interface ProgressData {
  completedSections: string[];
  bookmarkedResources: string[];
  reflections: ReflectionEntry[];
  lastVisitedTab: string;
  startDate: string;
  lastAccessDate: string;
}

export interface ReflectionEntry {
  id: string;
  date: string;
  prompt: string;
  response: string;
  section: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  examples?: string[];
}

export interface DownloadableResource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'template' | 'guide';
  category: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ScenarioOption {
  id: string;
  text: string;
  outcome: string;
  isEquitable: boolean;
  feedback: string;
}

export interface TeachingScenario {
  id: string;
  title: string;
  context: string;
  situation: string;
  options: ScenarioOption[];
}
