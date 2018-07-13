let Order = require("../modle/order");
let config = require("../config");
let Big= require("big.js")
let product = require("../servicer/product");
/**
 * 添加订单
 * @param order:{id:"5b483907b65a1f2780ba1d18",count:1}
 * @returns {Promise<*>}
 */
async function addOrder(order){
    //获取商品信息
    let p=await product.isExitById(order.productId);
    //检查库存
    if(p.stock<order.count){
        throw Error("库存不够!")
    }
    //
    order.productName=p.name;
    order.productPrice=p.price;
    order.totalPrice=(new Big(order.productPrice)).times(order.count+"")
    //产生订单
    let O = Order.create(order);
    //更新库存
    product.updateProduct(p.id,{stock:p.stock-order.count})
    return O;
}

async function getAddOreder(page=1){
   let t = await Order.find().skip(config.PageCount*(page-1)).limit(config.PageCount);
   return t;
}
module.exports={
    addOrder,
    getAddOreder
}