import IssueModel from "./../models/Issue.js";

export default (app) =>
  app.get("/api/get-all", (req, res) => {
    IssueModel.find().then(
      (issues) => res.status(200).send(issues),
      (err) => res.status(400).send(err)
    );
  });
