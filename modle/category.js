let mongoose = require("mongoose");
let schema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"分类不能为空"]
    },
    created:{
        type:Date,
        default:Date.now()
    }
});
module.exports=mongoose.model("categorys",schema)