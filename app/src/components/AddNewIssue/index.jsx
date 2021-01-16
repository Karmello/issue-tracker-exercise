import { Header, Segment, Button } from "semantic-ui-react";

import { createIssueRequest } from "./../../http/requests/index";

const onAddClick = () =>
  createIssueRequest().then(
    () => {},
    () => {}
  );

const AddNewIssue = () => (
  <>
    <Header attached="top" content="Add new issue" />
    <Segment attached="bottom">
      <Button primary onClick={onAddClick}>
        Add
      </Button>
    </Segment>
  </>
);

export default AddNewIssue;
