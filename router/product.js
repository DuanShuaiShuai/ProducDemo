let Product = require("../servicer/product");
require("../config")

let router = require("express").Router();
/**
 * 分页查询
 */
router.get("/:page",async(req,res)=>{
    let t = await  Product.getProduct(req.params.page);
    if(t.n<1){
        res.fail("查询失败!")
    }else{
        res.success(t)
    }
})
/**
 * 商品添加
 * @type {Router}
 */
router.post("/add",async(req,res)=>{
    let newVar = await Product.addProduct(req.body);
    res.success(newVar)
})

/**
 * 商品信息更新
 * @type {Router}
 */
router.put("/:id",async(req,res)=>{
    let newVar = await Product.updateProduct(req.params.id,req.body);
    if(newVar.n<1){
        throw Error("商品更新失败!")
    }
    res.success(newVar)
})
/**
 * 删除商品
 * @type {Router}
 */
router.delete("/:id",async (req,res)=>{
    let newVar = await Product.deleteProduct(req.params.id);
    if(newVar.n<1){
        res.fail("商品删除失败！")
    }else{
        res.success("商品删除成功！")
    }
})
module.exports=router
