import React, { useState, useEffect } from "react";
import { Card, Header, Grid, List } from "semantic-ui-react";
import ApiService from "../../utils/ApiService";

const api = new ApiService();

const Registered = props => {
  const [mealCourses, setMealCourses] = useState([]);

  useEffect(() => {
    api
      .getMealCourses()
      .then(response => {
        setMealCourses(response.data);
      })
      .catch(errors => {
        console.log(errors);
      });
  }, []);
  return (
    <Grid container centered>
      <Grid.Column width="14">
        <Card.Group>
          {mealCourses.length > 0
            ? mealCourses.map((meal, index) => (
                <Card key={index}>
                  <Card.Content>
                    <Card.Header>{meal.name}</Card.Header>
                    <Grid columns="2">
                      <Grid.Row>
                        <Grid.Column textAlign="left">
                          <Card.Meta>{meal.course}</Card.Meta>
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                          <Card.Meta>{meal.technique}</Card.Meta>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <List>
                        <Header as="h4">Ingredients</Header>
                        {meal.ingredients.length > 0
                          ? meal.ingredients.map((ingredient, index) => (
                              <List.Item key={index}>{ingredient}</List.Item>
                            ))
                          : null}
                      </List>
                    </Card.Description>
                  </Card.Content>
                </Card>
              ))
            : null}
        </Card.Group>
      </Grid.Column>
    </Grid>
  );
};

export default Registered;
