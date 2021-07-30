import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Product.css";

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      currentProduct: null,
      recentView: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:3000/data/productData.json");
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
        throw new Error("error");
      }
    } catch (err) {
      console.error(err);
    }
  }

  shuffleProduct() {
    const end = this.state.products.length - 1;
    const randomNumber = Math.floor(Math.random() * (end - 0) + 0);
    this.setState({
      currentProduct: this.state.products[randomNumber],
    });
  }

  setIsNotInterested(id) {
    const newProducts = this.state.products.map((product) => {
      if (product.id === id) {
        console.log(id, product.id);
        product.isNotInterested = true;
      }
      return product;
    });
    this.setState({
      products: newProducts,
    });
    console.log(this.state.products);
  }
  getProductDetail(id) {
    const targetProduct = this.state.products.find(
      (product) => product.id === id
    );
    this.setState({
      currentProduct: targetProduct,
    });
  }
  updateRecentView(id) {
    const newRecentView = this.state.recentView.filter(
      (productId) => productId !== id
    );
    newRecentView.unshift(id);
    this.setState({
      recentView: newRecentView,
    });
    setTimeout(() => {
      console.log(this.state.recentView);
    }, -1);
  }
  render() {
    if (!this.state.currentProduct) {
      return <div></div>;
    }
    return (
      <div className="container">
        <div className="product-detail">
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
        <ul className="products">
          {this.state.products.map((product) => {
            const { title, id, isNotInterested } = product;

            if (isNotInterested) {
              console.log(isNotInterested);
              return (
                <li className="product not-interested" key={id}>
                  <h2 className="title">{title}</h2>
                </li>
              );
            }

            return (
              <li
                className="product"
                onClick={() => {
                  this.getProductDetail(id);
                  this.updateRecentView(id);
                }}
                key={id}
              >
                <h2 className="title">{title}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductPage;
