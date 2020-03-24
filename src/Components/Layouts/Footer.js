import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Tabs, Tab} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
