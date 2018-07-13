let Product=require("../modle/product");
require("../bd")
let config = require("../config");

/**
 * f:添加商品
 * @param product:{name:'xxxx',price:"32.33"}
 * @returns {Promise<*>}
 */
async function addProduct(product) {
    let newVar = await Product.create(product);
    return newVar
}

/**
 * 分页查询
 * @param page :int
 * @returns {Promise<T>}
 */
async function getProduct(page=1){

    let list = await Product.find().skip(config.PageCount*(page-1)).limit(config.PageCount);
    return list
}
/**
 * 更新商品信息
 * @param id
 * @param product
 * @returns {Promise<*>}
 */
async  function updateProduct(id,product){
    await isExitById(id)
    let newVar=await Product.updateOne({"_id":id},product)
    return newVar
}
/**
 * 删除商品
 * @param id
 * @returns {Promise<*>}
 */
async function deleteProduct(id){
    await isExitById(id)
    let newVar = await Product.deleteOne({"_id":id});
    return newVar
}

/**
 * 检验商品是否存在
 * @param id
 * @returns {Promise<void>}
 */
async  function isExitById(id){
    let newVar = await Product.findOne({"_id":id});
    if(!newVar){
        throw  Error(`id为【${id}】的商品不存在`)
    }
    return newVar;
}
module.exports={
    addProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    isExitById
}