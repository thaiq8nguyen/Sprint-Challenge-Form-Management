import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import RegistrationForm from "./RegistrationForm";
import AuthService from "../utils/AuthService";

const auth = new AuthService();

const Registration = props => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerSubmit] = useState("");

  const handleRegisterUser = newUser => {
    setIsSubmitting(true);
    auth
      .register(newUser)
      .then(response => {
        auth.finishAuthentication(response.data.token);
        props.history.push("/registered");
      })
      .catch(errors => {
        if (errors.response) {
          if (errors.response.status === 400) {
            setServerSubmit(errors.response.data.message);
          }
        }
      })
      .then(() => {
        setIsSubmitting(false);
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
        <RegistrationForm
          registerUser={handleRegisterUser}
          submittingForm={isSubmitting}
          serverError={serverError}
        />
      </Grid.Column>
    </Grid>
  );
};

export default Registration;
