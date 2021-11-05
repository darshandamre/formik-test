import React from "react";
import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // make async call
          console.log("submit: ", data);
          setSubmitting(false);
        }}>
        {({ values, isSubmitting }) => (
          <Form>
            <Field
              placeholder="first name"
              name="firstName"
              type="input"
              as={TextField}
            />
            <div>
              <Field
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>

            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
