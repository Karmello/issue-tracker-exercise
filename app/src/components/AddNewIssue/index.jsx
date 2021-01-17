import { Header, Segment, Button, Form } from "semantic-ui-react";
import { Formik } from "formik";

import { createIssueRequest } from "./../../http/requests/index";

const onSubmit = (values, { resetForm }) => {
  setTimeout(() => {
    createIssueRequest(values).then(
      (res) => resetForm(),
      (err) => resetForm()
    );
  }, 500);
};

const AddNewIssue = () => (
  <>
    <Header attached="top" content="Add new issue" />
    <Segment attached="bottom">
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={onSubmit}
      >
        {({ values, handleSubmit, setFieldValue, isSubmitting }) => (
          <Form onSubmit={handleSubmit} loading={isSubmitting}>
            <Form.Input
              name="title"
              placeholder="Title"
              value={values.title}
              onChange={(e, data) => setFieldValue("title", data.value)}
            />
            <Form.Input
              name="description"
              placeholder="Description"
              value={values.description}
              onChange={(e, data) => setFieldValue("description", data.value)}
            />
            <div style={{ textAlign: "right" }}>
              <Button primary type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Segment>
  </>
);

export default AddNewIssue;
