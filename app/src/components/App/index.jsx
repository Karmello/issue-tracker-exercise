import { Container, Divider, Grid } from "semantic-ui-react";

import IssueList from "./../IssueList/index.jsx";
import AddNewIssue from "./../AddNewIssue/index.jsx";

const App = () => (
  <Container>
    <Divider section hidden />
    <Grid columns={2} stackable>
      <Grid.Column>
        <IssueList />
      </Grid.Column>
      <Grid.Column>
        <AddNewIssue />
      </Grid.Column>
    </Grid>
  </Container>
);

export default App;
