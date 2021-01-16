import { useEffect, useState } from "react";
import { Header, Segment, Dropdown } from "semantic-ui-react";

import { getIssuesRequest, updateIssue } from "./../../http/requests/index";

const IssueList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const stopLoading = () => setTimeout(() => setLoading(false), 500);

  const onStatusChange = (_id) => (e, data) => {
    updateIssue(_id, data.value).then((res) => {
      const index = list.findIndex((item) => item._id === _id);
      const newList = [...list];
      newList[index] = res.data;
      setList(newList);
    });
  };

  useEffect(() => {
    setLoading(true);
    getIssuesRequest().then((res) => {
      setList(res.data);
      stopLoading();
    }, stopLoading);
  }, []);

  return (
    <>
      <Header attached="top" content="Issues" />
      <Segment attached="bottom" loading={loading}>
        {list.map(({ _id, title, description, status }) => (
          <Header key={_id}>
            {title}
            <Header.Subheader>{description}</Header.Subheader>
            <Dropdown
              placeholder="Status"
              value={status}
              options={[
                { value: "OPEN", text: "Open" },
                { value: "PENDING", text: "Pending" },
                { value: "CLOSED", text: "Closed" },
              ]}
              onChange={onStatusChange(_id)}
            />
          </Header>
        ))}
      </Segment>
    </>
  );
};

export default IssueList;
