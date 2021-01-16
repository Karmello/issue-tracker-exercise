import IssueModel from "./../models/Issue.js";

export default (app) =>
  app.put("/api/update", (req, res) => {
    IssueModel.findOne({ _id: req.query._id }, (err, doc) => {
      if (err) return res.status(400).send(err);
      if (!doc) return res.status(404).send();
      doc.status = req.query.status;
      doc
        .save()
        .then((_doc) => res.status(200).send(_doc))
        .catch((_err) => res.status(400).send(_err));
    });
  });
