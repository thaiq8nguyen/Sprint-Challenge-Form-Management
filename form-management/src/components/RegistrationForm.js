import React from "react";
import { Header, Form, Message } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";

const RegistrationForm = ({ registerUser, isSubmittingForm, serverError }) => {
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, actions) => {
          registerUser(values);
          actions.resetForm({ username: "", password: "" });
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(6, "Username must be greater than 6 characters")
            .required("Username is required"),
          password: Yup.string()
            .min(6, "Password must be greater than 6 characters")
            .required("Password is required")
        })}
        render={props => (
          <Form onSubmit={props.handleSubmit} data-testid="form">
            <Header>User Registration</Header>
            <Form.Field>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                onChange={props.handleChange}
                type="text"
                value={props.values.username}
                data-testid="username-input"
                placeholder="Enter a username"
              ></input>
            </Form.Field>
            {props.touched.username && props.errors.username && (
              <Message negative visible content={props.errors.username} />
            )}
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                onChange={props.handleChange}
                type="password"
                value={props.values.password}
                data-testid="password-input"
                placeholder="Enter a password"
              ></input>
            </Form.Field>
            {props.touched.password && props.errors.password && (
              <Message negative visible content={props.errors.password} />
            )}
            <Form.Button
              loading={isSubmittingForm}
              type="submit"
              data-testid="submit-button"
            >
              Register
            </Form.Button>
            {serverError && <Message negative visible content={serverError} />}
          </Form>
        )}
      />
    </>
  );
};

export default RegistrationForm;
