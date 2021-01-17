import { useEffect, useState } from "react";
import { Header, Segment, Dropdown, Grid } from "semantic-ui-react";

import { getIssuesRequest, updateIssue } from "./../../http/requests/index";
import Status from "./../../constants/Status";

const IssueList = ({ list, setList }) => {
  const [loading, setLoading] = useState(false);

  const onStatusChange = (_id) => (e, data) => {
    const index = list.findIndex((item) => item._id === _id);
    const newList = [...list];
    newList[index].loading = true;
    setList(newList);

    updateIssue(_id, data.value).then(
      (res) => {
        const newList = [...list];
        newList[index] = res.data;
        setList(newList);
      },
      (err) => {
        const newList = [...list];
        delete newList[index].loading;
        setList(newList);
      }
    );
  };

  useEffect(() => {
    setLoading(true);
    getIssuesRequest().then(
      (res) => {
        setLoading(false);
        setList(res.data);
      },
      (err) => {
        setLoading(false);
        setList([]);
      }
    );
  }, []);

  return (
    <>
      <Header attached="top" content="Issues" />
      <Segment attached="bottom" loading={loading}>
        <div style={{ minHeight: "50px" }}>
          {list &&
            list.map(({ _id, title, description, status, loading }) => (
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
                    disabled={status === Status.Closed || loading}
                    placeholder="Status"
                    value={status}
                    options={[
                      {
                        value: Status.Open,
                        text: "Open",
                        disabled: status !== Status.Open,
                      },
                      { value: Status.Pending, text: "Pending" },
                      { value: Status.Closed, text: "Closed" },
                    ]}
                    onChange={onStatusChange(_id)}
                  />
                </Grid.Column>
              </Grid>
            ))}
          {list && list.length === 0 && "Nothing to show"}
        </div>
      </Segment>
    </>
  );
};

export default IssueList;
