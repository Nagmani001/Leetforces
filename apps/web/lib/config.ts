export const BACKEND_URL = "http://localhost:3001"

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export interface Problem {
  id: number;
  title: string;
  difficulty: Difficulty;
}

export const mockProblems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: Difficulty.HARD,
  },
];
