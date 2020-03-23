import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts'
import Table from './ExchangeRate'

export default class extends Component {

  constructor() {
    super();
    this.state = {
      rates: [],
      table: false,
      menu: false
    };
  }

  handleToggle = () =>{
    this.setState({
      open: !this.state.open
    })
  }

  componentDidMount () {
    fetch('https://api.exchangerate-api.com/v4/latest/USD').then(results => {
      return results.json();
    }).then(data => {
      let rates = Object.values(data.rates).map((rates) => {
        return(data.rates)
      });
      this.setState({rates: data.rates});
    });
  }

  handleFormCreate = newObj => {
    this.setState({rates: newObj})
  }

  render() {

    return (
      <Fragment>
        <Header onFormCreate={this.handleFormCreate}/>
        <Table rates={this.state.rates}   />
        <Footer/>
      </Fragment>
    )
  }
}
