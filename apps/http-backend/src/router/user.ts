import { JWT_SECRET, signinSchema, signupSchema } from "@repo/common/zod";
import jwt from "jsonwebtoken";
import { prisma } from "@repo/db/client";
import { Router, Request, Response } from "express";

export const userRouter = Router();

userRouter.post("/signup", async (req: Request, res: Response) => {
  const parsedData = signupSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      msg: "invalid data"
    });
    return;
  }
  const existingUser = await prisma.user.findFirst({
    where: {
      email: parsedData.data?.email
    }
  });
  const createUser = await prisma.user.create({
    data: {
      email: parsedData.data.email,
      password: parsedData.data.password,
      username: parsedData.data.name
    }
  });

  const token = jwt.sign({ userId: createUser.id }, JWT_SECRET);
  res.json({
    msg: "user created ",
    token,
  });
});


userRouter.post("/signin", async (req: Request, res: Response) => {

  const parsedData = signinSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      msg: "invalid data"
    });
    return;
  }
  const checkUser = await prisma.user.findFirst({
    where: {
      email: parsedData.data.email,
      password: parsedData.data.password,
    }
  });
  if (!checkUser) {
    res.status(403).json({
      msg: "invalid credentials"
    });
    return;
  }

  const token = jwt.sign({ userId: checkUser.id }, JWT_SECRET);
  res.json({
    msg: "user signed in ",
    token,
  });
});

