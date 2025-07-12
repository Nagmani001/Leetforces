
import { JWT_SECRET } from "@repo/common/zod";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export function authorizeUser(req: Request, res: Response, next: NextFunction) {
  const headers = req.headers["authorization"];
  if (!headers) {
    res.status(403).json({
      msg: "invalid credentials"
    });
    return;
  }
  const decoded = jwt.verify(headers, JWT_SECRET);
  if (!decoded) {
    res.status(403).json({
      msg: "invalid credentials"
    });
    return;
  }
  //@ts-ignore
  req.userId = decoded.userId;
  next();
}
