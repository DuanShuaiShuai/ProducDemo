let Order = require('../servicer/order');
let router = require("express").Router();
//
// {productId:"5b48390b183fa12d009c31cd",count:3}
/**
 * 添加订单
 */
router.post("/add",async (req,res)=>{
   let newVar = await Order.addOrder(req.body);
   if(!newVar){
       res.fail("订单生成失败！")
   }else{
       res.success(newVar)
   }
})
/**
 * 查询订单
 */
router.get("/:page",async(req,res)=>{
    let newVar = await Order.getAddOreder(req.params.page);
    if(!newVar){
        res.fail("订单查询失败！")
    }else{
        res.success(newVar)
    }
})
module.exports=router