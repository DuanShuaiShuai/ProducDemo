let Category = require("../modle/category");
let config = require("../config");

/**
 * function:添加分类
 * @param category:{name:"服饰"}
 * @returns {Promise<*>}
 */
async function addCategory(category) {
    return await Category.create(category);
}

/**
 * function:分页查询
 * @param page：Number
 * @returns {Promise<T>}
 */
async function getCategory(page=1){
    return await Category.find().skip(config.PageCount*(page-1)).limit(config.PageCount)
}

/**
 * 更新分类
 * @param id:"5b48178bbca3aa2c242f62d9"
 * @param update :{name:"服饰"}
 * @returns {Promise<void>}
 */
async function updateCategory(id,update) {
    await isExistById(id);
    let newVar = await Category.updateOne({"_id":id},update);
    if(newVar.n<1){
        throw Error("分类更新失败!")
    }
    return newVar
}

/**
 * 通过Ids删除商品分类
 * @param id:"5b48178bbca3aa2c242f62d9"
 * @returns {Promise<*>}
 */
async function deteleCategory(id){
    await isExistById(id);
    let newVar = await Category.deleteOne({"_id":id});
    if(newVar.n<1){
        throw Error("商品分类删除失败!")
    }
    return newVar;
}
/**
 * 通过商品Id来验证商品是否存在
 * @param id:"5b48178bbca3aa2c242f62d9"
 * @returns {Promise<void>}
 */
async function isExistById(id) {
    let red=null;
    try{
        red = await Category.findOne({"_id":id});
        console.log(red);
    }catch(e){
        throw Error(`id【${id}】格式不正确！`)
    }
    if(!red){
        throw Error(`id为【${id}】的分类不存在！`)
    }
}


module.exports={
    addCategory,
    getCategory,
    updateCategory,
    deteleCategory
}