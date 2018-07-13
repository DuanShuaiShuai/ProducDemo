let User = require("../modle/user");
let crypto = require("lxj-crypto");
let config = require("../config");

//查询登陆
async function getUserInfo(username){
   let newVar = await User.findOne({username:username}).select("-__v -password");
   if(!newVar){
       throw Error("用户不存在!")
   }
   return newVar;
}
//注册用户
async function registerUser(user){
    let res = await User.findOne({username:user.username});
    if(res){
        throw  Error(`用户名为【${user.username}】的用户已存在`)
    }
    //密码加密
    user.password=crypto.sha1Hmac(user.password,user.username)
    user.role=0;//默认是商家用户
    user.create=Date.now();
    let newVar = await User.create(user);
    newVar.password=""
    return newVar;
}
//删除用户
async function deleteUser(username) {
    console.log(username);
    let newVar1 = await User.findOne({username:username}).select("-__v -password");
    console.log(newVar1);
    if(!newVar1){
        throw Error("用户不存在!")
    }
    let newVar = await User.deleteOne({username:username});
    if(newVar.n<1){
        throw Error("用户删除失败!")
    }else{
        res.success("用户删除成功!")
    }
}

//更新用户信息
async function updateUser(id,user){
    let one = await User.findOne({"_id":id});
    if(!one){
        throw Error("此用户不存在!")
    }
    let newVar = await User.updateOne({"_id":id},user);
    return newVar;
}
//用户登陆
async function loginUser(usermsg) {
    //密码加密
    usermsg.password=crypto.sha1Hmac(usermsg.password,usermsg.username);

    //查数据库是否存在
    let user = await User.findOne(usermsg);

    if(!user){
        throw  Error("用户名或密码错误!")
    }
    //给用户生成一个token
    let tokenDate={

        username:user.username,
        //设定超时时间
        expire:Date.now()+config.TokenExpire
    }
    let token=crypto.aesEncrypt(JSON.stringify(tokenDate),config.TokenKey)
    return token;
}
module.exports={
    getUserInfo,
    registerUser,
    deleteUser,
    updateUser,
    loginUser,
}