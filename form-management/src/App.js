import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Registration from "./components/Registration";
import Registered from "./components/Registered/Registered";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <PrivateRoute path="/registered" component={Registered} />
        <Route path="*" component={() => <div>404 Not Found</div>} />
      </Switch>
    </Router>
  );
};

export default App;
