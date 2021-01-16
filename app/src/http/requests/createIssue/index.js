import api from "./../../index";

const createIssue = (data) =>
  api.post("http://localhost:9000/api/create", data);

export default createIssue;
