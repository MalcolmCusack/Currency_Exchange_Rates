import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    margin: "15px"
  },
}));

export default function() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         Open Menu
       </Button>
       <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
       >
         <MenuItem onClick={handleClose}>Currencies Table</MenuItem>
         <MenuItem onClick={handleClose}>
          <a href="https://github.com/MalcolmCusack">GitHub</a>
        </MenuItem>
       </Menu>
     </div>
   )
 }
