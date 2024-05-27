const products = [{
    id:"p02",
    name:"Producto 2",
    price: 50.00,
    amount: 40,
    category: "c01"
    },
    {
    id:"p03",
    name: "Producto 1",
    price: 33.00,
    amount: 123,
    category: "c02"
    }]

export const listProductsMock = (stage) => {
    return products;
}

export const getProductsMock = (idProduct, stage) => {
    for(let product of products){
        if(product.id == idProduct){
            return product;
        }
    }
    return "No se encontró el producto"
}