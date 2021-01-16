import mongoose from "mongoose";

const { model, Schema } = mongoose;

const issueSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["OPEN", "PENDING", "CLOSED"],
      default: "OPEN",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Issue", issueSchema);
