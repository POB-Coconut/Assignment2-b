import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Product.css';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      currentProduct: null,
      recentViews: [],
    };
  }

  setLocalStorage(data) {
    localStorage.removeItem('data');
    localStorage.setItem('data', JSON.stringify(data));
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:3000/data/productData.json');
      const data = await res.json();
      this.setState({
        products: data.map((product) => {
          product.id = uuidv4();
          product.isNotInterested = false;
          return product;
        }),
      });
      this.setState({
        currentProduct: this.state.products[0],
      });
      if (!res.ok) {
        throw new Error('error');
      }
    } catch (err) {
      console.error(err);
    }
  }

  shuffleProduct() {
    const newProducts = this.state.products.filter(
      (product) => product.isNotInterested === false
    );
    const randomNumber = Math.floor(
      Math.random() * (newProducts.length - 0) + 0
    );

    this.setState({
      currentProduct: newProducts[randomNumber],
    });
  }

  setIsNotInterested(id) {
    const newProducts = this.state.products.map((product) => {
      if (product.id === id) product.isNotInterested = true;

      return product;
    });

    this.setState({
      products: newProducts,
    });
  }

  getProductDetail(id) {
    const targetProduct = this.state.products.find(
      (product) => product.id === id
    );

    this.setState({
      currentProduct: targetProduct,
    });
  }

  updateRecentViews(id) {
    const newRecentViews = this.state.recentViews.filter(
      (product) => product.id !== id
    );
    const targetProduct = this.state.products.find(
      (product) => product.id === id
    );

    newRecentViews.unshift(targetProduct);

    this.setState({
      recentViews: newRecentViews,
    });

    this.setLocalStorage(newRecentViews);
  }

  render() {
    if (!this.state.currentProduct) return <div></div>;

    return (
      <div className='container'>
        <div className='product-detail'>
          <h2>{this.state.currentProduct.title}</h2>
          <h2>{this.state.currentProduct.brand}</h2>
          <h2>{this.state.currentProduct.price}</h2>
          <button
            onClick={() => {
              this.setIsNotInterested(this.state.currentProduct.id);
              this.shuffleProduct();
            }}
          >
            관심없음
          </button>
          <button
            onClick={() => {
              this.shuffleProduct();
            }}
          >
            랜덤상품조회
          </button>
        </div>
        <ul className='products'>
          {this.state.products.map((product) => {
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
                  this.getProductDetail(id);
                  this.updateRecentViews(id);
                }}
                key={id}
              >
                <h2 className='title'>{title}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductPage;
