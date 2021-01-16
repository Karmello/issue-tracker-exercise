import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { CreateIssueController } from "./controllers/index.js";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

const app = express();
CreateIssueController(app);

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
