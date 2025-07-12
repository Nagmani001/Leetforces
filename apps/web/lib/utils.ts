import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Difficulty } from "./config";
import axios from "axios";
import { BACKEND_URL } from "@repo/common/zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function paginationControl() {

}

export const getDifficultyColor = (difficulty: Difficulty) => {
  switch (difficulty) {
    case Difficulty.EASY: return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case Difficulty.MEDIUM: return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case Difficulty.HARD: return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};

