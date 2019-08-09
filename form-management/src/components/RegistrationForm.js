import React, { useState, useEffect } from "react";
import { Header, Form, Message } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegistrationForm = ({ user }) => {
  const [newUser, setNewUser] = useState("");
  //const [postRegistrationError, setPostRegistrationError] = useState("");

  useEffect(() => {
    if (newUser) {
      localStorage.setItem("token", newUser.token);
    }
  }, [newUser]);

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, actions) => {
          axios
            .post("http://localhost:5000/api/register", values)
            .then(response => {
              setNewUser(response.data);
              actions.resetForm({ username: "", password: "" });
            })
            .catch(errors => {
              if (errors.response) {
                if (errors.response.status === 400) {
                  //setPostRegistrationError(errors.response.data.message)
                  actions.resetForm({ username: "", password: "" });
                  actions.setStatus(errors.response.data.message);
                }
              }
            })
            .then(() => {
              actions.setSubmitting(false);
            });
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
          <Form onSubmit={props.handleSubmit}>
            <Header>User Registration</Header>
            <Form.Field>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                onChange={props.handleChange}
                type="text"
                value={props.values.username}
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
              ></input>
            </Form.Field>
            {props.touched.password && props.errors.password && (
              <Message negative visible content={props.errors.password} />
            )}
            <Form.Button loading={props.isSubmitting} type="submit">
              Register
            </Form.Button>
            {props.status && (
              <Message negative visible content={props.status} />
            )}
          </Form>
        )}
      />
    </>
  );
};

export default RegistrationForm;
