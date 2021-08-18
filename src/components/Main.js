import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { MessageList } from "./MessageList";
import { MessageInputField } from "./MessageInputField";
import { LogoutButton } from "./LogoutButton";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    // gridTemplateRows: "32px 1fr auto",
  },
});

export const Main = ({ name, setName }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LogoutButton setName={setName}/>
      <MessageList />
      <MessageInputField name={name}/>
    </div>
  );
};
