import React, { useState, createContext, useEffect } from "react";
import axios from "./axios";

export const ProductContext = createContext();

function Context(props) {
	const [products, setProducts] = useState(null);

	const getProducts = async () => {
		try {
            const { data } = await axios("/products");
            setProducts(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<ProductContext.Provider value={[products, setProducts]}>
			{props.children}
		</ProductContext.Provider>
	);
}

export default Context;
