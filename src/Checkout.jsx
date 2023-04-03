import { useState } from "react";
import { calculateDiscount } from "./Helpers";

function Checkout({ stockKeepingUnits, findUnitByName, discounts }) {
  const [checkout, setCheckout] = useState([]);
  
  // find a discount by SKU name
  const findDiscountBySkuName = (skuName) =>
    discounts.find((discount) => discount.skuName === skuName);
	
  // check if an item is already in the checkout
  const isIteminCheckout = (itemName) =>
    checkout.map((item) => item.sku.name).includes(itemName);
  // add an item to the checkout or increase the quantity if it's already there
  const addToCheckout = (name) => {
	// find the SKU and discount associated with the item
    const sku = findUnitByName(name);
    const discount = findDiscountBySkuName(name);

    if (!isIteminCheckout(name)) {
		 // if the item isn't already in the checkout, add it with a quantity of 1 and a total unit price equal to the SKU price
      setCheckout([
        ...checkout,
        {
          sku: sku,
          quantity: 1,
          totalUnitPrice: sku.price,
        },
      ]);
    } else {
		// if the item is already in the checkout, find it and increase the quantity by 1 and update the total unit price based on any applicable discounts
      setCheckout((checkout) =>
        checkout.map((checkoutItem) => {
          return checkoutItem?.sku?.name === name
            ? {
                ...checkoutItem,
                quantity: checkoutItem.quantity + 1,
                totalUnitPrice:
                  discount != undefined
                    ? calculateDiscount(
                        checkoutItem.quantity + 1,
                        discount,
                        checkoutItem.sku.price
                      )
                    : checkoutItem.totalUnitPrice + checkoutItem?.sku?.price,
              }
            : checkoutItem;
        })
      );
    }
  };
  
  // Function to format price
  const formatPrice = (priceInPence) => {
	const pounds = Math.floor(priceInPence / 100);
	const pence = priceInPence % 100;
	return `£${pounds}.${pence < 10 ? '0' : ''}${pence}`;
  };

  return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-extrabold text-gray-900 mt-6 mb-2">
				USER PAGE
				</h2>
			<div>
				<h3 className="text-lg font-semibold mb-2">Shopping List</h3>
				<table className="w-full table-auto">
					<tr className="border-b border-gray-300 text-left">
						<th className="px-4 py-3">Name</th>
						<th className="px-4 py-3">Price</th>
						<th className="px-4 py-3">Add to basket</th>
					</tr>
					<tbody>
						{stockKeepingUnits.map((sku) => (
							<tr key={sku.name} className="border-b border-gray-200">
								<td className="px-4 py-2">{sku.name}</td>
								<td className="px-4 py-2">{formatPrice(sku.price)}</td>
								<td className="px-4 py-2">
									<button onClick={() => addToCheckout(sku.name)}
									className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition ease-in-out duration-150"
									>Add</button>
								</td>
								
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div>
				<h3 className="text-lg font-semibold mb-2 mt-6">Checkout</h3>
				<table className="w-full table-auto">
					<thead>
						<tr className="border-b border-gray-300 text-left">
							<th className="px-4 py-3">Name</th>
							<th className="px-4 py-3">Price</th>
							<th className="px-4 py-3">Quantity</th>
							<th className="px-4 py-3">Total Unit Price</th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<td className="font-bold">Total:</td>
							<td></td>
							<td></td>
							<td className="font-bold">
								{`£${(checkout.reduce((acc, item) => acc + item.totalUnitPrice, 0) / 100).toFixed(2)}`}
							</td>
						</tr>
					</tfoot>
					<tbody>
						{checkout &&
							checkout.map((checkoutItem) => (
								<tr key={checkoutItem.sku.name} className="border-b border-gray-200">
									<th className="py-2">{checkoutItem.sku.name}</th>
									<th className="py-2">{formatPrice(checkoutItem.sku.price)}</th>
									<th className="py-2">{checkoutItem.quantity}</th>
									<th className="py-2">{formatPrice(checkoutItem.totalUnitPrice)}</th>
									
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Checkout;