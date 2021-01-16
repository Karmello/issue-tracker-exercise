import { useEffect } from "react";
import { Header, Segment } from "semantic-ui-react";

import { getIssuesRequest } from "./../../http/requests/index";

const IssueList = () => {
  useEffect(() => {
    getIssuesRequest().then(
      () => {},
      () => {}
    );
  }, []);

  return (
    <>
      <Header attached="top" content="Issues" />
      <Segment attached="bottom"></Segment>
    </>
  );
};

export default IssueList;
