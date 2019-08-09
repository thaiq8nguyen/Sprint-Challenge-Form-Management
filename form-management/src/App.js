import React from "react";
import { Grid } from "semantic-ui-react";
import RegistrationForm from "./components/RegistrationForm";
function App() {
  const handleUser = user => {
    console.log(user);
  };
  return (
    <Grid centered style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column width={5}>
        <RegistrationForm user={handleUser} />
      </Grid.Column>
    </Grid>
  );
}

export default App;
