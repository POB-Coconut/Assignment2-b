import React, { Component } from 'react';

export default class ProductsList extends Component {
  render() {
    return (
      <ul className='products'>
        {this.props.paginatedProducts.map((product) => {
          const { title, id, isNotInterested } = product;

          if (isNotInterested) {
            return (
              <li className='product not-interested' key={id}>
                <h2 className='title'>{title}</h2>
              </li>
            );
          }

          return (
            <li
              className='product'
              onClick={() => {
                this.props.getProductDetail(id);
                this.props.updateRecentViews(id);
              }}
              key={id}
            >
              <h2 className='title'>{title}</h2>
            </li>
          );
        })}
      </ul>
    );
  }
}
