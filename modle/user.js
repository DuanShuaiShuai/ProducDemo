let mongoose = require("mongoose");
let schema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"用户名不能为空！"]
    },
    password:{
        type:String,
        required:[true,"密码不能为空"]
    },
    age:{
        type:Number,
        min:[0,"年龄不能小于0"],
        max:[120,"年龄不能超过120岁"],
        default:18
    },
    role:{
        type:Number,
        default:0 //0表示商家用户，100表示超级管理员
    },
    created:{
        type:Date,
        default:Date.now()
    }

});


module.exports=mongoose.model("Users",schema)