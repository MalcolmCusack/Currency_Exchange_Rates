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
      });
      this.setState({rates: data.rates});
      //console.log(data.rates);

    });
  }


  handleFormCreate = newObj => {
  //  var obj = newObj;
    //this.setState({rates: newObj})
    //this.state.rates.push(newObj)
    //this.setState({rates: newObj})
    this.setState({rates: newObj})
    //Object.assign(this.state.rates, newObj)})
    console.log(newObj)
    console.log(this.state.rates)

    /*
    this.setState(({ rates: rates }) => ({
      rates: [
        ...rates,
          newObj
      ]
    }))
    console.log(this.state.rates)*/
  }

  render() {

    console.log(this.state.rates)
  //  console.log(obj)

    return (

      <Fragment>

        <Header onFormCreate={this.handleFormCreate}/>
        <Table rates={this.state.rates}   />

        <Footer/>

      </Fragment>
    )
  }

}
