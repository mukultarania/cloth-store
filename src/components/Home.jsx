import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

function Home() {
	const [products] = useContext(ProductContext);
	const [cat, setCat] = useState(null);
	const getAllCat = async () => {
		try {
			const { data } = await axios.get(`products/categories`);
			setCat(data);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		setCat(getAllCat());
	}, []);
	return products && cat ? (
		<div className="flex w-full h-full">
			<Navbar cat={cat} />
			<div className="w-[85%] flex items-center flex-wrap overflow-x-hidden overflow-y-auto mt-5 ml-5">
				{products.map((p, i) => (
					<Product product={p} key={i} />
				))}
			</div>
		</div>
	) : (
		<Loading />
	);
}

export default Home;
