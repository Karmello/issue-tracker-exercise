import IssueModel from "./../models/Issue.js";

export default (app) =>
  app.post("/api/create", (req, res) => {
    const newIssue = new IssueModel(req.body);
    newIssue
      .save()
      .then((doc) => res.status(201).send(doc))
      .catch((err) => res.status(400).send(err));
  });
