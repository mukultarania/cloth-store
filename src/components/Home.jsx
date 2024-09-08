import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import axios from "../utils/axios";

function Home() {
	const [products] = useContext(ProductContext); // Gets products from context
	const { search } = useLocation();
	const category = search.includes("=")
		? decodeURIComponent(search.split("=")[1])
		: "";
	const [filteredProducts, setFilteredProducts] = useState(products); // Stores the filtered products
	const [cat, setCat] = useState(null); // Stores categories

	// Fetch products by category
	const getProductCategory = async () => {
		try {
			const { data } = await axios.get(`products/category/${category}`);
			setFilteredProducts(data);
		} catch (error) {
			console.error(error);
		}
	};

	// Fetch all categories
	const getAllCat = async () => {
		try {
			const { data } = await axios.get(`products/categories`);
			setCat(data);
		} catch (error) {
			console.error(error);
		}
	};

	// Effect for fetching categories and products
	useEffect(() => {
        getAllCat();
		if (category) getProductCategory();
		else setFilteredProducts(products);
	}, [category, products]); // Adding products and category to the dependency array

	return filteredProducts && cat ? (
		<div className="flex w-full h-full">
			<Navbar cat={cat} />
			<div className="w-[85%] flex items-center flex-wrap overflow-x-hidden overflow-y-auto mt-5 ml-5">
				{filteredProducts.map((p, i) => (
					<Product product={p} key={i} />
				))}
			</div>
		</div>
	) : (
		<Loading />
	);
}

export default Home;