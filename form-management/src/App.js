import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import RegistrationForm from "./components/RegistrationForm";
import axios from "axios";

const App = () => {
  const [newUser, setNewUser] = useState("");
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [serverError, setServerSubmit] = useState("");

  useEffect(() => {
    if (newUser) {
      localStorage.setItem("lambda_user_token", newUser.token);
    }
  }, [newUser]);

  const handleRegisterUser = newUser => {
    setIsSubmittingForm(true);
    axios
      .post("http://localhost:5000/api/register", newUser)
      .then(response => {
        setNewUser(response.data);
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
        <RegistrationForm
          registerUser={handleRegisterUser}
          submittingForm={isSubmittingForm}
          serverError={serverError}
        />
      </Grid.Column>
    </Grid>
  );
};

export default App;
