import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { ERROR_MESSAGE } from "utils/config";
import "./Product.css";

class ProductPage extends Component {
	constructor() {
		super();
		this.state = {
			products: [],
		};
	}

	async componentDidMount() {
		try {
			const res = await fetch("http://localhost:3005/data/productData.json");
			const data = await res.json();
			this.setState({
				products: data.map((product) => {
					product.id = uuidv4();
					return product;
				}),
			});
			console.log(this.state.products);
			if (!res.ok) {
				throw new Error(ERROR_MESSAGE);
			}
		} catch (err) {
			console.error(err);
		}
	}
	removeProduct(id) {
		this.setState({
			products: this.state.products.filter((product) => product.id !== id),
		});
		console.log("work!");
	}

	render() {
		return (
			<div className="container">
				<button className="random">랜덤상품조회</button>
				<ul className="products">
					{this.state.products.map((product) => {
						const { title, id, price, brand } = product;
						return (
							<li className="product" key={id}>
								<h2 className="title">{title}</h2>
								<h4 className="brand">{brand}</h4>
								<p className="price">{price}</p>
								<button onClick={() => this.removeProduct(id)}>관신없음</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default ProductPage;
