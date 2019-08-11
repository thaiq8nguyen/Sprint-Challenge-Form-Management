import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import api from "../../utils/api";
import auth from "../../utils/auth";

const Login = props => {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [serverError, setServerSubmit] = useState("");

  const handleLogin = credential => {
    setIsSubmittingForm(true);
    api
      .login(credential)
      .then(response => {
        if (response.status === 200) {
          auth.login(response.data.token);
          props.history.push("/registered");
        }
      })
      .catch(errors => {
        if (errors.response) {
          if (errors.response.status === 400) {
            setServerSubmit(errors.response.data.message);
          }
        }
      })
      .then(() => {
        setIsSubmittingForm(false);
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
          submittingForm={isSubmittingForm}
          serverError={serverError}
        />
      </Grid.Column>
    </Grid>
  );
};

export default Login;
