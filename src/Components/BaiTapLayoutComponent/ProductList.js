import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
          <div>
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
            <h1 className="text-center text-white">BEST SMARTPHONE</h1>
              <div className="row">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
              </div>
            </section>
          </div>
        );
    }
}
