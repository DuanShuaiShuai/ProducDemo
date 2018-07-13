let crypto = require("lxj-crypto");
let config = require("../config");
let userServicer = require("../servicer/user");

function isExcludeUrl(url) {
    let excludeUrls=[
        /.*\/user\/login/,
        /.*\/user\/add/,
    ];
    let isExclude=false;
    excludeUrls.forEach((it)=>{
        if(it.test(url)){
            isExclude=true;
        }
    })
    return isExclude;
}
module.exports=async (req,res,next)=>{
    if(!isExcludeUrl(req.url)){
        //从header中取出token
        let token = req.get('token');
        if(!token){
            throw Error("缺少token");
        }
        //对token进行解码
        let tokenDate=null;
        try{
            //对称解密
        tokenDate =JSON.parse(crypto.aesDecrypt(token,config.TokenKey))
        }catch(e){
            throw Error("token不合法")
        }
        //判断token是否过期
        if(tokenDate.expire<Date.now()){
            throw  Error("token已过期")
        }
        //查询用户信息并保存
        let userInfo = await userServicer.getUserInfo(tokenDate.username);
        req.user=userInfo;
    }
    next();

    /**
     * 访问的是注册登陆页面。没有url.user
     *
     */
}