import {React, useState} from "react";

function InventoryItems({stockKeepingUnits, setStockKeepingUnits}) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	
	const addItem = () => {
		setStockKeepingUnits([...stockKeepingUnits, {name: name, price: price}]);
		
	};
	
	const deleteItem = (name) => {
		setStockKeepingUnits(stockKeepingUnits.filter((sku) => sku.name != name));
	}
	
	return (
		<div className="App">
			<p className="App-header">Inventory Items</p>
			<div>
				{stockKeepingUnits.length < 1 ? (
					<p>No items in inventory</p>
				) : (
					<table>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Remove the item</th>
						</tr>
						<tbody>
							{stockKeepingUnits.map((sku) => (
								<tr key={sku.name}>
									<td>{sku.name}</td>
									<td>{sku.price}</td>
									<td>
										<button onClick={() => deleteItem(sku.name)}>Delete</button>
									</td>
									
								</tr>
							))}
						</tbody>
					</table>
				)}
				<form>
					<label>
						Enter item name:
						<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label>
						Enter item price:
						<input
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						/>
					</label>
				</form>
				<button onClick={addItem}>Add Item</button>
			</div>
		</div>
	)
}

export default InventoryItems;
