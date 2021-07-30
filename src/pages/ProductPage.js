import React, { Component } from "react";
import { ERROR_MESSAGE } from "utils/config";
import { v4 as uuidv4 } from "uuid";

class ProductPage extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	async componentDidMount() {
		try {
			const res = await fetch("http://localhost:3005/data/productData.json");
			const data = await res.json();
			this.setState({ data: data });
			this.state.data.map((x) => (x.id = uuidv4()));
			console.log(this.state.data);
			if (!res.ok) {
				throw new Error(ERROR_MESSAGE);
			}
		} catch (err) {
			console.error(err);
		}
	}

	render() {
		return (
			<div>
				<p></p>
			</div>
		);
	}
}

export default ProductPage;
