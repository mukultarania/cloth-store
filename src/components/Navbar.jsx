import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cat }) {
	const randomColor = () => {
		return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.4)`;
	};

	return (
		<nav className="w-[15%] h-full bg-slate-100 flex flex-col items-center pt-5">
            <Link
                to={`/`}
				className="w-[100px] p-1 text-xs text-center mx-5 border rounded text-black border-black text-blue-200"
			>
				Home
			</Link>
			<a
				className="p-1 text-xs mt-2 border rounded border-blue-500 text-blue-500 text-blue-200"
				href=""
			>
				Add new Product
			</a>
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
		</nav>
	);
}

export default Navbar;
