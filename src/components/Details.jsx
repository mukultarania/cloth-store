import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function Details() {
	const { id } = useParams(null);
	const [item, setItem] = useState();

	const getSingleProduct = async (id) => {
		try {
			const { data } = await axios.get(`products/${id}`);
			setItem(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		setItem(getSingleProduct(id));
	}, []);

	return item ? (
		<div className="h-full bg-slate-50 w-[70%] flex justify-between items-center gap-5 m-auto p-[10%]">
			<img
				className=" object-contain bg-transparent w-[40%]"
				src={item.image}
				alt=""
			/>
			<div className="content h-[80%] w-[60%]">
				<h1 className="text-2xl">{item.title}</h1>
				<h3 className="text-zinc-400">{item.title}</h3>
				<h2 className=" font-bold">${item.price}</h2>
				<p>{item.description}</p>
				<div className="font-bold">
					<Link to="">Edit</Link> <Link to="">Delete</Link>
				</div>
			</div>
		</div>
	) : (
		<Loading />
	);
}

export default Details;
