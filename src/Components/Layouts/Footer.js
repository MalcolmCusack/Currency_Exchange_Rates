import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    margin: "15px"
  }
}));

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Footer
    </div>
  )
}
