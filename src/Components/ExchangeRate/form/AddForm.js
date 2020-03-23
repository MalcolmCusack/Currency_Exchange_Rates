import React, {Fragment, Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class extends Component {

  state = {
    open: false,
    form: {
      currency: "",
      rate: "",
    },
  }

  handleToggle = () =>{
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({target: { value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  handleSubmit = () => {
    var newObj = {[this.state.form.currency.toUpperCase()]:parseInt(this.state.form.rate) }
    this.props.onCreate(newObj)
    this.state.form.currency = ""
    this.state.form.rate = ""
    this.handleToggle()
  }

  render() {

    const { open, form: {currency, rate }} = this.state
    return <Fragment>
        <Fab color="secondary" aria-label="add" size='medium' onClick={this.handleToggle}>
          <AddIcon />
        </Fab>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a New Row</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a new Currency and Rate of exchange in USD.
            </DialogContentText>
            <form>
              <TextField
                id="outlined-basic"
                label="Currency"
                variant="outlined"
                value={currency}
                onChange={this.handleChange("currency")}
              />
              <TextField
                id="outlined-basic"
                label="Rate"
                variant="outlined"
                value={rate}
                onChange={this.handleChange("rate")}
                />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    }
  }
