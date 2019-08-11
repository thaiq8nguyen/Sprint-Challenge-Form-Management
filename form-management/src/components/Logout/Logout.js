import React, { useEffect } from "react";
import auth from "../../utils/AuthService";
import { Message } from "semantic-ui-react";

const Logout = props => {
  useEffect(() => {
    auth.logout();
  }, []);
  return (
    <Message>
      <Message.Header>You have logged out!</Message.Header>
    </Message>
  );
};

export default Logout;
