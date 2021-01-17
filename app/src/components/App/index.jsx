import { Container, Divider, Grid } from "semantic-ui-react";

import IssueList from "./../IssueList/index.jsx";
import AddNewIssue from "./../AddNewIssue/index.jsx";

const App = () => (
  <Container>
    <Divider section hidden />
    <Grid columns={2} stackable>
      <Grid.Column width="6">
        <AddNewIssue />
      </Grid.Column>
      <Grid.Column width="10">
        <IssueList />
      </Grid.Column>
    </Grid>
  </Container>
);

export default App;
