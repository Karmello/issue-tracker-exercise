import { useEffect, useState } from "react";
import { Header, Segment, Dropdown } from "semantic-ui-react";

import { getIssuesRequest } from "./../../http/requests/index";

const IssueList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const stopLoading = () => setTimeout(() => setLoading(false), 500);

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
        {list.map(({ title, description, status }) => (
          <Header>
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
            />
          </Header>
        ))}
      </Segment>
    </>
  );
};

export default IssueList;
