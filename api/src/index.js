import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

const app = express();
const dbConnectionString = MONGO_URI;

mongoose
  .connect(dbConnectionString, {
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
