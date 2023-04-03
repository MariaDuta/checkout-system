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
	console.log(discounts)
	
	const deleteDiscount = (skuName) => {
		setDiscounts(discounts.filter((discount) => discount.skuName != skuName));
	};
	
	return (
		<div>
			<header>Discounts</header>
			<table>
				<tr>
					<th>SKU Name</th>
					<th>Quantity</th>
					<th>Price</th>
					<th>Delete</th>
				</tr>
				<tbody>
					{discounts.map((discount) => (
						<tr key={discount.skuName}>
							<td>{discount.skuName}</td>
							<td>{discount.quantity}</td>
							<td>{discount.price}</td>
							<td>
								<button onClick={() => deleteDiscount(discount.skuName)}>
									Delete
								</button>
							</td>
							
						</tr>
					))}
				</tbody>
			</table>
			
			<form>
				<label>
					Enter SKU name:
					<input
					 type="text"
					 value={skuName}
					 onChange={(e) => setSkuName(e.target.value)} />
				</label>
				<label>
					Enter quantity:
					<input
					 type="number"
					 value={quantity}
					 onChange={(e) => setQuantity(e.target.value)} />
				</label>
				<label>
					Enter discount price:
					<input
					 type="number"
					 value={price}
					 onChange={(e) => setPrice(e.target.value)} />
				</label>
			</form>
			<button onClick={addDiscount}>Add discount</button>
		</div>
	)
}

export default Discounts;