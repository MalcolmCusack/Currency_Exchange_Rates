import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';
//import {Tab} from '@material-ui/Tabs';

export default ({muscles}) =>
   <Paper>
      <Tabs
        values={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label='Footer'/>

      </Tabs>
    </Paper>
