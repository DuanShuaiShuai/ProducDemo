let mongoose = require("mongoose");
let schema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"商品名字不能为空!"]
    },
    price:{
        type:String,
        required:[true,"商品价格不能为空"]
    },
    stock:{
        type:Number,
        default:0
    },
    description:{
        type:String
    },
    isOnSale:{
        type:Boolean,
        default:false
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"商品分类必须存在"]
    },
    created:{
        type:Date,
        default:Date.now()
    }
});


module.exports=mongoose.model("product",schema)