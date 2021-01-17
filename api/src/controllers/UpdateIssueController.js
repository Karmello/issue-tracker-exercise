import IssueModel from "./../models/Issue.js";

export default (app) =>
  app.put("/api/update", (req, res) => {
    const { _id, status } = req.query;
    IssueModel.findOne({ _id }, (err, doc) => {
      if (err) return res.status(400).send(err);
      if (!doc) return res.status(404).send();
      if (
        (doc.status === "OPEN" && status !== "OPEN") ||
        (doc.status === "PENDING" && status === "CLOSED")
      ) {
        doc.status = status;
        doc
          .save()
          .then((_doc) => res.status(200).send(_doc))
          .catch((_err) => res.status(400).send(_err));
      } else {
        res.status(400).send("NOT_ALLOWED");
      }
    });
  });
