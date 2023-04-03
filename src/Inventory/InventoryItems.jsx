import {React, useState} from "react";

function InventoryItems({stockKeepingUnits, setStockKeepingUnits}) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	
	// Define a function to add an item to the inventory
	
	const addItem = () => {
		// Add a new item object to the stockKeepingUnits array
		setStockKeepingUnits([...stockKeepingUnits, {name: name, price: price}]);
		
	};
	
	const deleteItem = (name) => {
		// filter method creates a new array without the item with the given name
		setStockKeepingUnits(stockKeepingUnits.filter((sku) => sku.name != name));
	}
	
	return (
		<div className="flex flex-col items-center">
      		<p className="text-2xl font-bold">Inventory Items</p>
      			<div className="w-full max-w-md">
				{stockKeepingUnits.length < 1 ? (
					<p>No items in inventory</p>
				) : (
					<table className="table-auto w-full">
						<tr>
							<th className="px-4 py-2">Name</th>
							<th className="px-4 py-2">Price</th>
							<th className="px-4 py-2">Remove the item</th>
						</tr>
						<tbody>
							{stockKeepingUnits.map((sku) => (
								<tr key={sku.name}>
									<td className="border px-4 py-2">{sku.name}</td>
									<td className="border px-4 py-2">{sku.price}</td>
									<td className="border px-4 py-2">
										<button onClick={() => deleteItem(sku.name)}
										className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
										>Delete</button>
									</td>
									
								</tr>
							))}
						</tbody>
					</table>
				)}
				<form className="my-4">
					<div className="flex flex-col mb-4">
						<label className="font-bold mb-2" htmlFor="item-name">
							Enter item name:
						</label>
						<input
							className="border py-2 px-3 text-gray-800 rounded"
							id="item-name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label className="font-bold mb-2" htmlFor="item-price">
							Enter item price:
						</label>
						<input
							className="border py-2 px-3 text-gray-800 rounded"
							id="item-price"
							type="text"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
					</form>
					<button onClick={addItem}
					 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Add Item</button>
				</div>
			</div>
	)
}

export default InventoryItems;
