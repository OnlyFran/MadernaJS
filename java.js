class product {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
}

let firstProduct = new product("Munición", 650);
let secondProduct = new product("Fusil", 2500);
let thirdProduct = new product("Granada", 470);
let fourthProduct = new product("Kevlar", 840);
let fifthProduct = new product("casco", 600);
let products = [firstProduct, secondProduct, thirdProduct, fourthProduct, fifthProduct];

let buy = []

buy.push(products[0].price);
buy.push(products[1].price);
buy.push(products[2].price);
buy.push(products[3].price);
buy.push(products[4].price);

let total = buy.reduce((acc, e) => {
    return acc = acc + e;
});

console.log(`Este armamento tiene un valor total de ${total} dólares.`)