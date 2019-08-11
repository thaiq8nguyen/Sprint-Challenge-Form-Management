import React from "react";
import { Header, Grid } from "semantic-ui-react";
const Landing = () => {
  return (
    <div>
      <Grid centered>
        <Grid.Column width="5">
          <Header>Welcome to Neverending Todos App</Header>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Landing;
