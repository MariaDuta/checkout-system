import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/NavBar";
import {defaultInventory, defaultDiscounts} from "./Data";
import Inventory from "./Inventory/Inventory";

function App() {
	const [stockKeepingUnits, setStockKeepingUnits] = useState(defaultInventory);
	const [discounts, setDiscounts] = useState(defaultDiscounts);
	
	const findUnitByName = (name) =>
		stockKeepingUnits.find((unit) => unit.name === name);
		
  return (
    <div className>
		<Navbar />
		<Routes>
			{stockKeepingUnits && (
			<Route
				path="/admin"
				element={
					<Inventory 
					stockKeepingUnits={stockKeepingUnits}
					setStockKeepingUnits={setStockKeepingUnits}
					discounts={discounts}
					setDiscounts={setDiscounts}
					/>
				}
			/>
			)}
		</Routes>
    </div>
  );
}

export default App;
