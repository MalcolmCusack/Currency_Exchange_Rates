import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts'
import Table from './ExchangeRate'

export default class extends Component {

  constructor() {
    super();
    this.state = {
      rates: []
    };
  }

  componentDidMount() {
    fetch('https://api.exchangerate-api.com/v4/latest/USD').then(results => {
      return results.json();
    }).then(data => {
      let rates = Object.values(data.rates).map((rates) => {
        return(
      //    <div key={data.rates}>
      //      <li>{data.rates}</li>
      //    </div>
      data.rates
        )
      })
      this.setState({rates: data.rates});
      //console.log(data.rates);

    })
}

  render() {


    return (

      <Fragment>

        <Header />
        <Table rates={this.state.rates}  />

        <Footer/>

      </Fragment>
    )
  }

}
