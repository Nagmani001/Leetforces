require('dotenv').config();

import express, { Request, Response } from "express";
import { prisma } from "@repo/db/client";
import { addProblem } from "@repo/common/zod";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "healthy"
  })
});

app.post("/addProblem", async (req: Request, res: Response) => {
  const parsedBody = addProblem.safeParse(req.body);
  console.log(req.body);
  if (!parsedBody.success) {
    res.status(400).json({
      msg: "invlid data"
    })
    return;
  }
  if (parsedBody.data.password !== process.env.ADD_PROBLEM_PASSWORD) {
    res.status(400).json({
      msg: "invalid password"
    })
    return;
  }

  const ans = await prisma.problem.create({
    data: {
      title: parsedBody.data.title,
      DescriptionTop: parsedBody.data.descriptionTop,
      DescriptionBottom: parsedBody.data.descriptionBottom,
      cpuTimeLimit: parsedBody.data.cpuTimeLimit,
      memoryLimit: parsedBody.data.memoryLimit,
      difficulty: parsedBody.data.difficulty
    }
  });

  parsedBody.data.testcases.map(async (test) => {
    const testcase = await prisma.testCase.create({
      data: {
        problemId: ans.id,
        input: test.input,
        output: test.output,
      }
    })
  });

  parsedBody.data.basicTestCases.map(async (test) => {
    const basicTestCases = await prisma.basicTestCases.create({
      data: {
        problemId: ans.id,
        input: test.input,
        output: test.output,
      }
    })
  });

  res.status(200).json({
    msg: "problem added successfully",
  })

});

app.get("/problems", async (req: Request, res: Response) => {
  try {
    const ans = await prisma.problem.findMany({
      include: {
        basicTestCases: true,
        testcases: true,
      }
    });
    res.json({
      msg: ans
    })

  } catch (err) {
    console.log(err);
  }
  res.json({
    msg: "invalid"
  })

});



app.listen(3001, () => {
  console.log("server is running on port 3001");
})
