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

export const DescriptionTopTest = `
Given a mathematical expression. The expression will be one of the following: **A + B**, **A - B**, **A \* B**, **A / B**.
</br>
Print the **result** of the mathematical expression.

</br>

 **Input**
Only one line contains **A**, **S**, and **B**. **(1 ≤ A, B ≤ 10⁴)**. **S** is either **(+, -, *, /)***.

</br>
 **Output**
Print the **result** of the mathematical expression.
`

export const DescriptionBottomTest = `### **Note**

For the division operation, print the result as an **integer without any fractions**.`

