import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {
  render() {
    return (
      <ul>
        {this.props.paginatedProducts.map((product) => {
          const { title, id, isNotInterested } = product;

          if (isNotInterested) {
            return (
              <li key={id} className='products-list__product not-interested'>
                <h2>{title}</h2>
              </li>
            );
          }

          return (
            <li
              className='products-list__product'
              onClick={() => {
                this.props.getProductDetail(id);
                this.props.updateRecentViews(id);
              }}
              key={id}
            >
              <Link to={`/product/${id}`}>
                <h2>{title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
