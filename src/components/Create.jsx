import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = ({ closeModal }) => {
	// State for form inputs
	const [products, setProducts] = useContext(ProductContext);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [category, setCategory] = useState(""); // Category state now managed by dropdown
	const [description, setDescription] = useState("");

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			title.trim().length < 0 ||
			description.trim().length < 5 ||
			category.trim().length < 0 ||
			price.trim().length < 0 ||
			imageUrl.trim().length < 0
		) {
			alert(
				"All fields are required and description should be at least 5 characters long."
			);
			return;
		}

		// Create a new product object from the form inputs
		const newProduct = {
			title,
			price,
			imageUrl,
			category,
			description,
		};

		fetch("https://fakestoreapi.com/products", {
			method: "POST",
			body: JSON.stringify({
				title: title,
				price: price,
				description: description,
				image: imageUrl,
				category: category,
			}),
		})
			.then((res) => res.json())
			.then((newProduct) => setProducts([...products, newProduct]));

		// setProducts([...products, newProduct]);

		// console.log("New Product:", newProduct);
		// Reset form fields after submission
		setTitle("");
		setPrice("");
		setImageUrl("");
		setCategory("");
		setDescription("");

		// Close the modal after submission
		closeModal();
	};

	return (
		<div
			id="default-modal"
			className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-40"
		>
			<div className="relative w-full max-w-2xl p-6 bg-white rounded-sm shadow-sm">
				{/* Modal header */}
				<div className="flex items-center justify-between pb-4 border-b border-gray-200">
					<h3 className="text-lg font-semibold text-gray-800">
						Add New Product
					</h3>
					<button
						type="button"
						className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-sm p-1"
						onClick={closeModal}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
						<span className="sr-only">Close modal</span>
					</button>
				</div>

				{/* Modal body with form */}
				<div className="py-4 space-y-4">
					<form onSubmit={handleSubmit}>
						{/* Product Title */}
						<div>
							<label
								htmlFor="title"
								className="block mb-1 text-sm font-medium text-gray-700"
							>
								Product Title
							</label>
							<input
								type="text"
								id="title"
								className="w-full px-2 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								required
							/>
						</div>

						{/* Price */}
						<div>
							<label
								htmlFor="price"
								className="block mb-1 text-sm font-medium text-gray-700"
							>
								Price
							</label>
							<input
								type="number"
								id="price"
								className="w-full px-2 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
								required
							/>
						</div>

						{/* Image URL */}
						<div>
							<label
								htmlFor="imageUrl"
								className="block mb-1 text-sm font-medium text-gray-700"
							>
								Image URL
							</label>
							<input
								type="text"
								id="imageUrl"
								className="w-full px-2 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
								value={imageUrl}
								onChange={(e) => setImageUrl(e.target.value)}
								required
							/>
						</div>

						{/* Category Dropdown */}
						<div>
							<label
								htmlFor="category"
								className="block mb-1 text-sm font-medium text-gray-700"
							>
								Category
							</label>
							<select
								id="category"
								className="w-full px-2 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								required
							>
								<option value="">Select a category</option>
								<option value="electronics">Electronics</option>
								<option value="jewelery">Jewelery</option>
								<option value="men's clothing">
									Men's Clothing
								</option>
								<option value="women's clothing">
									Women's Clothing
								</option>
							</select>
						</div>

						{/* Description */}
						<div>
							<label
								htmlFor="description"
								className="block mb-1 text-sm font-medium text-gray-700"
							>
								Description
							</label>
							<textarea
								id="description"
								className="w-full px-2 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
								rows="4"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								required
							></textarea>
						</div>

						{/* Submit Button */}
						<div className="flex justify-end mt-4 space-x-3">
							<button
								type="button"
								className="px-5 py-1 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
								onClick={closeModal}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="px-5 py-1 text-sm font-medium text-white bg-indigo-600 rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
							>
								Save Product
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Create;
