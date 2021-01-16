import { Header, Segment, Button } from "semantic-ui-react";

const AddNewIssue = () => (
  <>
    <Header attached="top" content="Add new issue" />
    <Segment attached="bottom">
      <Button primary>Add</Button>
    </Segment>
  </>
);

export default AddNewIssue;
