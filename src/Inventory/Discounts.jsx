import {React, useState} from "react";

// Discounts takes two props, 'discounts' as an array and 'setDiscounts' to update the array
function Discounts({discounts, setDiscounts}) {
	const [skuName, setSkuName] = useState("");
	const [price, setPrice] = useState("");
	const [quantity, setQuantity] = useState("");
	
	//adds a new discount to the array
	const addDiscount = () => {
		setDiscounts([
			...discounts,
			{skuName: skuName, quantity: quantity, price: price},
		]);
	};
	
	const deleteDiscount = (skuName) => {
		setDiscounts(discounts.filter((discount) => discount.skuName != skuName));
	};
	
	return (
		<div className="w-full">
			<header className="text-2xl font-bold">Discounts</header>
			<table className="w-full mt-4">
				<tr className="bg-gray-200">
					<th className="p-2">SKU Name</th>
					<th className="p-2">Quantity</th>
					<th className="p-2">Price</th>
					<th className="p-2">Delete</th>
				</tr>
				<tbody>
					 {/* Map over each discount in the discounts array and render a row in the table for each */}
					{discounts.map((discount) => (
						<tr key={discount.skuName}>
							<td className="p-2">{discount.skuName}</td>
							<td className="p-2">{discount.quantity}</td>
							<td className="p-2">{discount.price}</td>
							<td className="p-2">
								<button onClick={() => deleteDiscount(discount.skuName)}
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
									Delete
								</button>
							</td>
							
						</tr>
					))}
				</tbody>
			</table>
			{/* Render a form to allow the user to add a new discount */}
			
			<form  className="mt-4">
				<div className="flex flex-col mb-4">
					<label className="mb-2 font-bold text-gray-700">
						Enter SKU name:
						<input
						type="text"
						value={skuName}
						onChange={(e) => setSkuName(e.target.value)} 
						className="border rounded-lg py-2 px-3 mt-2"
						/>
					</label>
					<label className="mb-2 font-bold text-gray-700">
						Enter quantity:
						<input
						type="number"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
						className="border rounded-lg py-2 px-3 mt-2"
						/>
					</label>
					<label className="mb-2 font-bold text-gray-700">
						Enter discount price:
						<input
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						className="border rounded-lg py-2 px-3 mt-2"
						/>
					</label>
				</div>
				<button 
				 onClick={addDiscount}
			 	 className="bg-green-500 text-white py-2 px-4 rounded-lg"
			 	>
				Add discount
				</button>
			</form>
		</div>
	)
}

export default Discounts;