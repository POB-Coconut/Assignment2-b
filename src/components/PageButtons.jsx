import React, { Component } from 'react';

export default class PageButtons extends Component {
  constructor(props) {
    super(props);

    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToPrevPage() {
    let prevPage = this.props.page - 1;

    if (prevPage < 0) prevPage = this.props.paginatedProducts.length - 1;

    this.props.setPage(prevPage);
  }

  goToNextPage() {
    let nextPage = this.props.page + 1;

    if (nextPage > this.props.paginatedProducts.length - 1) nextPage = 0;

    this.props.setPage(nextPage);
  }

  render() {
    return (
      <div>
        <button className='btn-small' type='button' onClick={this.goToPrevPage}>
          prev
        </button>

        {this.props.paginatedProducts.map((_, index) => {
          return (
            <button
              className={`btn-small ${
                index === this.props.page && 'btn-current'
              }`}
              type='button'
              key={index}
              onClick={() => this.props.setPage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className='btn-small' type='button' onClick={this.goToNextPage}>
          next
        </button>
      </div>
    );
  }
}
