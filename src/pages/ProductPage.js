import React, { Component } from 'react';
import './Product.css';
import { DEFAULT_PAGE, ERROR_MSG, BASE_URL } from 'utils/config';
import { ProductsList, ProductDetail, PageButtons } from 'components';
import { paginate } from 'utils/paginate';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      products: [],
      currentProduct: null,
      recentViews: [],
      page: DEFAULT_PAGE,
      paginatedProducts: [],
    };

    this.getProductDetail = this.getProductDetail.bind(this);
    this.updateRecentViews = this.updateRecentViews.bind(this);
    this.setIsNotInterested = this.setIsNotInterested.bind(this);
    this.shuffleProduct = this.shuffleProduct.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const res = await fetch(`${BASE_URL}/data/productData.json`);
      const data = await res.json();

      if (!res.ok) throw new Error(ERROR_MSG);

      const products = data.map((product, index) => {
        product.id = index + 1;
        product.isNotInterested = false;

        return product;
      });

      this.setState({ products });
      this.setState({
        currentProduct: products[0],
        isLoading: false,
      });
      this.updatePaginatedProducts();
      //   this.updatePaginatedProducts(products, this.state.page);
    } catch (err) {
      this.setState({ isLoading: false });
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

    this.setState({ currentProduct: newProducts[randomNumber] });
  }

  setIsNotInterested(id) {
    const newProducts = this.state.products.map((product) => {
      if (product.id === id) product.isNotInterested = true;

      return product;
    });

    this.setState({ products: newProducts });
  }

  getProductDetail(id) {
    const targetProduct = this.state.products.find(
      (product) => product.id === id
    );

    this.setState({ currentProduct: targetProduct });
  }

  updateRecentViews(id) {
    const newRecentViews = this.state.recentViews.filter(
      (product) => product.id !== id
    );
    const targetProduct = this.state.products.find(
      (product) => product.id === id
    );
    const date = new Date();
    const recentPrduct = { ...targetProduct, date };

    newRecentViews.unshift(recentPrduct);

    this.setState({ recentViews: newRecentViews });
    this.setLocalStorage(newRecentViews);
  }

  setLocalStorage(data) {
    localStorage.removeItem('data');
    localStorage.setItem('data', JSON.stringify(data));
  }

  setPage(index) {
    this.setState({ page: index });
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts() {
    this.setState((state) => ({
      paginatedProducts: paginate(state.products)[state.page],
    }));
  }

  render() {
    if (this.state.isLoading || !this.state.currentProduct) return null;

    return (
      <div className='container'>
        <ProductDetail
          key={this.state.currentProduct.id}
          curProduct={this.state.currentProduct}
          setIsNotInterested={this.setIsNotInterested}
          shuffleProduct={this.shuffleProduct}
        />

        <aside>
          <ProductsList
            paginatedProducts={this.state.paginatedProducts}
            getProductDetail={this.getProductDetail}
            updateRecentViews={this.updateRecentViews}
          />
          <PageButtons
            paginatedProducts={this.state.paginatedProducts}
            setPage={this.setPage}
            page={this.state.page}
          />
        </aside>
      </div>
    );
  }
}

export default ProductPage;
