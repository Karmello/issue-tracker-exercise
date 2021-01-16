import api from "./../../index";

const createIssue = (body) => {
  return api.post("http://localhost:9000/api/create", body);
};

export default createIssue;
