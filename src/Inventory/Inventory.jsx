import InventoryItems from "./InventoryItems";
import Discounts from "./Discounts";

function Inventory({
	stockKeepingUnits,
	setStockKeepingUnits,
	discounts,
	setDiscounts,
}) {
	return (
		<div>
			<header>Inventory</header>
			<InventoryItems 
			stockKeepingUnits={stockKeepingUnits}
			setStockKeepingUnits={setStockKeepingUnits}
			/>
			<Discounts discounts={discounts} setDiscounts={setDiscounts} />
		</div>
	)
	
}

export default Inventory;