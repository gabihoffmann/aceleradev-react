const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const produto = require('../src/produto');

function getShoppingCart(ids, productsList) {
	let {products} = produto.filterNamesCategory(ids,productsList);
	let {promotion} = produto.filterPromotion(ids,productsList);
	let {totalPrice} = produto.discountedAmount(ids,productsList);
	let {discountValue} = produto.discountValue(ids,productsList);
	let {discount} = produto.discountPercentage(ids,productsList);
	
	return {products, promotion,totalPrice,discountValue,discount};
}

module.exports = { getShoppingCart };