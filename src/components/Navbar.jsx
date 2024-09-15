import React, { useState } from "react";
import { Link } from "react-router-dom";
import Create from "./Create";

function Navbar({ cat }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const randomColor = () => {
		return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.4)`;
	};

	const openModal = () => {
		setIsModalOpen(true); // Set modal open
	};

	const closeModal = () => {
		setIsModalOpen(false); // Set modal close
	};

	return (
		<nav className="w-[15%] h-full bg-slate-100 flex flex-col items-center pt-5">
			<Link
				to={`/`}
				className="w-[100px] p-1 text-xs text-center mx-5 border rounded text-black border-black"
			>
				Home
			</Link>
			<button
				className="p-1 text-xs mt-2 border rounded border-blue-500 text-blue-500 text-blue-200"
				onClick={openModal} // Trigger openModal on click
			>
				Add new Product
			</button>
			<hr className="w-[80%] bg-black my-3" />
			<h1 className="text-2xl w-[80%]">Category</h1>
			<ul className="w-[80%] mt-2">
				{cat ? (
					cat.map((c, i) => (
						<Link
							to={`/?category=${c}`}
							key={i}
							className="flex items-center mb-3"
						>
							<span
								style={{ backgroundColor: randomColor() }}
								className="rounded-full w-[10px] h-[10px] mr-2"
							></span>
							<h3 className="text-xs font-semibold capitalize">
								{c}
							</h3>
						</Link>
					))
				) : (
					<li>Loading categories...</li>
				)}
			</ul>

			{/* Render the Create modal component and pass the closeModal function */}
			{isModalOpen && <Create closeModal={closeModal} />}
		</nav>
	);
}

export default Navbar;