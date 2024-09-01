import React from "react";
import { Link } from "react-router-dom";

function Product(product) {
	return (
		<div className="w-[18%] h-[32vh] card flex flex-col justify-center items-center p-2 m-2 border shadow rounded ">
			<Link
				to={`/details/${product.product.id}`}
				className="w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110 overflow-hidden"
				style={{
					backgroundImage: `url(${product.product.image})`,
				}}
			></Link>
			<h6 className="text-xs font-semibold text-center mt-1">{product.product.title}</h6>
		</div>
	);
}

export default Product;
