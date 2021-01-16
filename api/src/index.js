import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";

import {
  CreateIssueController,
  GetIssuesController,
  UpdateIssueController,
} from "./controllers/index.js";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "PUT");
  next();
});

CreateIssueController(app);
GetIssuesController(app);
UpdateIssueController(app);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      app.listen(PORT, (err) => {
        if (err) return console.log(err);
        console.log(`API listening on port ${PORT}`);
      });
    },
    (err) => console.log(err)
  );

export default app;
