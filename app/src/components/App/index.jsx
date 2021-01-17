import { useState } from "react";
import { Container, Divider, Grid } from "semantic-ui-react";

import IssueList from "./../IssueList/index.jsx";
import AddNewIssue from "./../AddNewIssue/index.jsx";

const App = () => {
  const [list, setList] = useState(null);

  return (
    <Container>
      <Divider section hidden />
      <Grid columns={2} stackable>
        <Grid.Column width="10">
          <IssueList list={list} setList={setList} />
        </Grid.Column>
        <Grid.Column width="6">
          <AddNewIssue list={list} setList={setList} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default App;
