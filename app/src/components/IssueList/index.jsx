import { useEffect } from "react";
import { Header, Segment } from "semantic-ui-react";

import { createIssueRequest } from "./../../http/requests/index";

const IssueList = () => {
  useEffect(() => {
    createIssueRequest().then(
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
