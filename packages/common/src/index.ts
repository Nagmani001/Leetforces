import { z } from "zod";

// model BasicTestCases {
// id        String   @id @default(uuid())
// input     String
// output    String
// Problem   Problem? @relation(fields: [problemId], references: [id])
// problemId String
// }
// basicTestCases    BasicTestCases[]
//  testcases         TestCase[]


const difficulty = ["EASY", "MEDIUM", "HARD"];
export const addProblem = z.object({
  password: z.string(),
  title: z.string(),
  descriptionTop: z.string(),
  descriptionBottom: z.string().optional(),
  cpuTimeLimit: z.number(),
  memoryLimit: z.number(),
  basicTestCases: z.array(z.object({
    input: z.string(),
    output: z.string(),

  })),
  testcases: z.array(z.object({
    input: z.string(),
    output: z.string(),
  })),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
});

export const signupSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});


export const signinSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const JWT_SECRET = "nagmani";

export const BACKEND_URL = "http://localhost:3001/api/v1";
