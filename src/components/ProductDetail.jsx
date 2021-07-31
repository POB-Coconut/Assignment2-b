import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.product = this.props.curProduct;
  }

  render() {
    return (
      <main className='product-detail card'>
        <div className='product-detail__about'>
          <h2>{this.product.title}</h2>
          <div className='card bar'></div>
          <h3>브랜드: {this.product.brand}</h3>
          <p>가격: {this.product.price}</p>
        </div>

        <button
          className='btn-large card'
          onClick={() => {
            this.props.setIsNotInterested(this.product.id);
            this.props.shuffleProduct();
            this.props.updateRecentViews(this.product.id);
          }}
        >
          관심없음
        </button>
        <button
          className='btn-large card'
          onClick={() => {
            this.props.shuffleProduct();
          }}
        >
          랜덤상품조회
        </button>

        <Link to='/recentlist'>
          <button className='btn-large'>상품조회이력</button>
        </Link>
      </main>
    );
  }
}
