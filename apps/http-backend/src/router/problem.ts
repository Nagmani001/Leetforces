import { addProblem } from "@repo/common/zod";
import { prisma } from "@repo/db/client";
import { Router, Request, Response } from "express";


export const problemRouter = Router();


// add a problem  manually 
problemRouter.post("/addProblem", async (req: Request, res: Response) => {
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

  //TODO: at the very least add transaction 
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
        inputTest: test.inputTest,
        outputTest: test.outputTest
      }
    })
  });

  parsedBody.data.basicTestCases.map(async (test) => {
    const basicTestCases = await prisma.basicTestCases.create({
      data: {
        problemId: ans.id,
        input: test.input,
        output: test.output,
        inputTest: test.input,
        outputTest: test.output,
      }
    })
  });

  res.status(200).json({
    msg: "problem added successfully",
  })

});

problemRouter.get("/first/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) { return; }
  try {
    const ans = await prisma.problem.findFirst({
      where: {
        id: Number(id),
      },
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

problemRouter.get("/all-problem", async (req: Request, res: Response) => {
  try {
    const title_difficulty = await prisma.problem.findMany({
      omit: {
        cpuTimeLimit: true,
        memoryLimit: true,
        DescriptionBottom: true,
        DescriptionTop: true,
      }
    });
    res.json(title_difficulty);
  } catch (Err) {
    console.log(Err);
  }
});

