import api from "./../../index";

const getIssues = () => {
  return api.get("http://localhost:9000/api/get-all");
};

export default getIssues;
