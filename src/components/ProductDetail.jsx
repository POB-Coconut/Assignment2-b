import React, { Component } from 'react';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.product = this.props.curProduct;
  }

  render() {
    return (
      <main className='product-detail'>
        <div className='product-detail__about'>
          <h2>{this.product.title}</h2>
          <h3>{this.product.brand}</h3>
          <p>{this.product.price}</p>
        </div>

        <button
          className='btn-large'
          onClick={() => {
            this.props.setIsNotInterested(this.product.id);
            this.props.shuffleProduct();
          }}
        >
          관심없음
        </button>
        <button
          className='btn-large'
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
