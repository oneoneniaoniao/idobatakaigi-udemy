import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    marginRight: "16px",
    textAlign: "right"
  },
});

export const LogoutButton = ({setName}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button color="primary" onClick={() =>{setName("")}}>Logout</Button>
    </div>
  )
}
