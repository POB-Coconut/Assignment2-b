import React, { Component } from 'react';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.product = this.props.curProduct;
  }

  render() {
    return (
      <main className='product-detail'>
        <h2>{this.product.title}</h2>
        <h2>{this.product.brand}</h2>
        <h2>{this.product.price}</h2>
        <button
          onClick={() => {
            this.props.setIsNotInterested(this.product.id);
            this.props.shuffleProduct();
          }}
        >
          관심없음
        </button>
        <button
          onClick={() => {
            this.props.shuffleProduct();
          }}
        >
          랜덤상품조회
        </button>
      </main>
    );
  }
}
