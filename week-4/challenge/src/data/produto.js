const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function findProducts(ids,products){
    if(Array.isArray(products)){
       var produtos = products.filter(product => ids.includes(product.id));
   }
    return produtos;
}

function filterNamesCategory(ids,colection){
    let produtos = findProducts(ids, colection);
    let products = produtos.map((produto)=>{
        return JSON.parse(`{"name": "${produto.name}","category": "${produto.category}"}`)
    });
   return {products}
}

function fullPrice(ids,products){
    let produtos = findProducts(ids,products);
    let valorTotal = produtos.reduce((accumulator,product) => accumulator+product.regularPrice,0);
    
    return Number(valorTotal.toFixed(2));
}

function filterPromotion(ids,products){
    let produtos = findProducts(ids, products);
    let category = produtos.reduce((accumulator,product)=>{
        if(accumulator.includes(product.category)) return accumulator
        return accumulator = [...accumulator, product.category]
    }, [])

    let promotion = promotions[category.length - 1]

    return  {promotion}
}

function discountedAmount(ids,products){
    let produtos = findProducts(ids,products);
    let category = filterPromotion(ids,products);
    
    let totalPrice = produtos.reduce((accumulator, produto) => {
        for (let look of produto.promotions){
            if(look.looks.includes(category.promotion)){
               return accumulator += look.price;
            }
        }
        return accumulator += produto.regularPrice

    },0);

    totalPrice =  totalPrice.toFixed(2);
    return {totalPrice}
}


function discountValue(ids, products){
    let valorTotal = fullPrice(ids,products);
    let valorCompra = discountedAmount(ids,products);
    let discountValue = (valorTotal - valorCompra.totalPrice).toFixed(2);
    return {discountValue}
}

function discountPercentage(ids, products){
    let valorTotal = fullPrice(ids,products);
    let descontoTotal = discountValue(ids, products);
    
    let discount = ((descontoTotal.discountValue * 100)/valorTotal).toFixed(2);
    discount = discount+"%"
    return {discount}
}

module.exports = {
    findProducts,
    filterNamesCategory,
    fullPrice,
    filterPromotion,
    discountedAmount,
    discountValue,
    discountPercentage,
}