import api from "./../../index";

const updateIssue = (_id, status) =>
  api.put("http://localhost:9000/api/update", undefined, {
    params: {
      _id,
      status,
    },
  });

export default updateIssue;
