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
			<Link
				to={`/`}
				className="p-1 px-7 absolute top-1 left-1 text-xs text-center mx-5 mt-5 border rounded text-black border-black"
			>
				Home
			</Link>
			<img
				className=" object-contain bg-transparent w-[40%]"
				src={item.image}
				alt=""
			/>
			<div className="content h-[80%] w-[60%] mb-2">
				<h1 className="text-2xl">{item.title}</h1>
				<h3 className="text-zinc-400">{item.title}</h3>
				<h2 className=" font-bold">${item.price}</h2>
				<p>{item.description}</p>
				<div className="font-semibold mt-2">
					<Link
						to=""
						className="border rounded border-blue-500 text-blue-500 px-3"
					>
						Edit
					</Link>{" "}
					<Link
						to=""
						className="border rounded border-red-500 text-red-500 px-3 ml-2"
					>
						Delete
					</Link>
				</div>
			</div>
		</div>
	) : (
		<Loading />
	);
}

export default Details;
