let Order = require("../servicer/order");
require("../bd")
async  function add(){

    let newVar = await Order.addOrder({productId:"5b48390b183fa12d009c31cd",count:3});
    console.log(newVar);
}
// add();

async function get(page){
    let newVar = await Order.getAddOreder(page);
    console.log(newVar);
}
get(2);