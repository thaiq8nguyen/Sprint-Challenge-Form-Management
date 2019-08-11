import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import LoginForm from "./LoginForm";

import AuthService from "../../utils/AuthService";

const auth = new AuthService();

const Login = props => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerSubmit] = useState("");

  const handleLogin = credential => {
    setIsSubmitting(true);
    auth
      .login(credential)
      .then(response => {
        if (response.status === 200) {
          setIsSubmitting(false);
          auth.finishAuthentication(response.data.token);
          props.history.push("/registered");
        }
      })
      .catch(errors => {
        if (errors.response) {
          if (errors.response.status === 400) {
            //setServerSubmit(errors.response.data.message);
          }
        }
      });
  };
  return (
    <Grid
      centered
      style={{ height: "100vh" }}
      verticalAlign="middle"
      data-testid="grid-layout"
    >
      <Grid.Column width={5}>
        <LoginForm
          handleLogin={handleLogin}
          submittingForm={isSubmitting}
          serverError={serverError}
        />
      </Grid.Column>
    </Grid>
  );
};

export default Login;
