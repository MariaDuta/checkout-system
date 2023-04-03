import InventoryItems from "./InventoryItems";
import Discounts from "./Discounts";

function Inventory({
	stockKeepingUnits,
	setStockKeepingUnits,
	discounts,
	setDiscounts,
}) {
	return (
		<div className="p-4">
			<header className="text-2xl font-bold mb-4">Inventory</header>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<InventoryItems 
				stockKeepingUnits={stockKeepingUnits}
				setStockKeepingUnits={setStockKeepingUnits}
				/>
				<Discounts discounts={discounts} setDiscounts={setDiscounts} />
				</div>
		</div>
	)
	
}

export default Inventory;