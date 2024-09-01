import React, { useEffect, useState } from "react";


function Navbar(cat) {
    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()}, 0.4)`;
    }
	return (
		<nav className="w-[15%] h-full bg-slate-100 flex flex-col items-center pt-5">
			<a
				className="p-1 text-xs border rounded border-blue-500 text-blue-500 text-blue-200"
				href=""
			>
				Add new Product
			</a>
			<hr className="w-[80%] bg-black my-3" />
			<h1 className="text-2xl w-[80%]">Category</h1>
			<ul className="w-[80%] mt-2">
				{cat.cat ?
					cat.cat.map((c) => (
						<li className="flex items-center mb-3">
							<span
								style={{ backgroundColor: color() }}
								className="rounded-full w-[10px] h-[10px] mr-2"
							></span>{" "}
							<h3 className="text-xs font-semibold capitalize">{c}</h3>
						</li>
					)) : (<li></li>)}
			</ul>
		</nav>
	);
}

export default Navbar;
