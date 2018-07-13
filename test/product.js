let product = require("../servicer/product");
require("../bd")

async function get(page) {
   let t = await product.getProduct(page);
    console.log(t);
}

// get(1);

async function add(sproduct) {
    let newVar = await product.addProduct(sproduct);
    console.log(newVar);
}
add({
    "name":"联想33",
    "price":"1111.22",
    "description":"一款超计本",
    "category":"5b4817a4c6113e3924af0684"
})

async function sdelete(id){
    let newVar = await product.deleteProduct(id);
    console.log(newVar);
}
// sdelete("5b483900bcaf6932a47d1a2f")

async function updateP(id,pro) {
    let newVar = await product.updateProduct(id,pro);
    console.log(newVar);
}
updateP("5b48390b183fa12d009c31cd",{name:"yyyyyy"});