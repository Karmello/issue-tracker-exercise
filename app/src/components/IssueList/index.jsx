import { useEffect, useState } from "react";
import { Header, Segment, Dropdown, Grid } from "semantic-ui-react";

import { getIssuesRequest, updateIssue } from "./../../http/requests/index";

const IssueList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const onStatusChange = (_id) => (e, data) => {
    const index = list.findIndex((item) => item._id === _id);
    const newList = [...list];
    newList[index].loading = true;
    setList(newList);
    updateIssue(_id, data.value).then(
      (res) => {
        setTimeout(() => {
          const index = list.findIndex((item) => item._id === _id);
          const newList = [...list];
          newList[index] = res.data;
          setList(newList);
        }, 500);
      },
      (err) => {
        setTimeout(() => {
          const newList = [...list];
          delete newList[index].loading;
          setList(newList);
        }, 500);
      }
    );
  };

  useEffect(() => {
    setLoading(true);
    getIssuesRequest().then(
      (res) => {
        setTimeout(() => {
          setLoading(false);
          setList(res.data);
        }, 500);
      },
      (err) => {
        setTimeout(() => {
          setLoading(false);
          setList([]);
        }, 500);
      }
    );
  }, []);

  return (
    <>
      <Header attached="top" content="Issues" />
      <Segment attached="bottom" loading={loading}>
        <div style={{ minHeight: "50px" }}>
          {list.map(({ _id, title, description, status, loading }) => (
            <Grid columns={2} key={_id}>
              <Grid.Column width={13}>
                <Header>
                  {title}
                  <Header.Subheader>{description}</Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Dropdown
                  loading={loading}
                  disabled={loading}
                  placeholder="Status"
                  value={status}
                  options={[
                    { value: "OPEN", text: "Open" },
                    { value: "PENDING", text: "Pending" },
                    { value: "CLOSED", text: "Closed" },
                  ]}
                  onChange={onStatusChange(_id)}
                />
              </Grid.Column>
            </Grid>
          ))}
        </div>
      </Segment>
    </>
  );
};

export default IssueList;
