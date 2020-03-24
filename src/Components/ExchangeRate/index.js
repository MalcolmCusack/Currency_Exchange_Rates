import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({table: {
    //maxWidth: 800
  }});

function createData(currency, rate) {
  return {currency, rate};
}

function sortData(rates) {
  for (let [key, value] of Object.entries(rates)) {
    rows.push(createData(key, (1 / value).toFixed(6)));
  }

  rows.sort(function(a, b) {
    return b.rate - a.rate;
  })
}

const rows = []

export default function({rates}) {

  sortData(rates)

  const classes = useStyles();

  return (<TableContainer component={Paper}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Currency</TableCell>
          <TableCell align="right">Exchange Rate To USD</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          rows.map(row => (<TableRow key={row.currency}>
            <TableCell component="th" scope="row">
              {row.currency}
            </TableCell>
            <TableCell align="right">{'$' + row.rate}</TableCell>
          </TableRow>))
        }
      </TableBody>
    </Table>
  </TableContainer>);
}
