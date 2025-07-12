require('dotenv').config();
import express from "express";
import cors from "cors";
import { userRouter } from "./router/user";
import { problemRouter } from "./router/problem";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/problem", problemRouter);



app.get("/", (req, res) => {
  res.json({
    msg: "healthy"
  })
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
})
