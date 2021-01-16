import { Header, Segment, Button, Form } from "semantic-ui-react";
import { Formik } from "formik";

import { createIssueRequest } from "./../../http/requests/index";

const onSubmit = (values) => createIssueRequest(values);

const AddNewIssue = () => (
  <>
    <Header attached="top" content="Add new issue" />
    <Segment attached="bottom">
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Input
              name="title"
              placeholder="Title"
              onChange={(e, data) => setFieldValue("title", data.value)}
            />
            <Form.Input
              name="description"
              placeholder="Description"
              onChange={(e, data) => setFieldValue("description", data.value)}
            />
            <Button primary type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Segment>
  </>
);

export default AddNewIssue;
