let category = require("../servicer/category");
let router = require("express").Router();
/**
 * 商品分类添加
 */
router.post("/add",async (req,res)=>{
    let newVar = await category.addCategory(req.body);
    if(newVar){
        res.success("商品分类添加成功！")
    }else{
        res.fail("商品分类添加失败！")
    }
})
/**
 * 获取分类信息
 */
router.get("/:page",async(req,res)=>{
    console.log(req.params.page);
    let newVar = await category.getCategory(req.params.page);
    if(newVar){
        res.success(newVar)
    }else{
        res.fail("商品分类信息获取失败！")
    }
})
/**
 * 通过id删除商品分类
 */
router.delete("/:id",async (req,res)=>{
    console.log(req.params.id);
    await category.deteleCategory(req.params.id)
    res.success(`id为【${req.params.id}】的分类删除成功!`)
})
/**
 * 更新分类
 * @type {Router}
 */
router.put("/:id",async (req,res)=>{
   let newVar= await category.updateCategory(req.params.id,req.body);
   if(newVar.n>0){
       res.success("更新分类信息成功!")
   }
})

module.exports=router;