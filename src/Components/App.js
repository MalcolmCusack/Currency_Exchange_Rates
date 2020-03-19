import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts'
import Table from './ExchangeRate'

export default class extends Component {
  state = {

  }

  render() {
    

    return (

      <Fragment>

        <Header />

        <Table  />

        <Footer/>

      </Fragment>
    )
  }

}
