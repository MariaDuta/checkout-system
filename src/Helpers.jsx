export const calculateDiscount = ( quantity, discount, unitPrice) => {
	const multiple = Math.floor(quantity / discount.quantity);
	const remainder = quantity % discount.quantity;
	
	return unitPrice * remainder + discount.price * multiple;
};