require("../bd")
let categoryServicer = require("../servicer/category");



async function addcate() {
    let newVar = await categoryServicer.addCategory({name:'食品'});
    console.log(newVar);
}



async function getcate(){
    let newVar = await categoryServicer.getCategory(3);
    console.log(newVar);
}

async function updatecate(){
     await categoryServicer.updateCategory("5b48178bbca3aa2c242f72d9",{name:"花生豆"});
}
async function deleteCate(){
    await categoryServicer.deteleCategory( "5b48178bbca3aa2c242f62d9");
}
deleteCate();