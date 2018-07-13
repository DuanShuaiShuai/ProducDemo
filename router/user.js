let express = require("express");
let router = express.Router();

let userService=require("../servicer/user");


//注册用户
router.post("/add",async (req,res)=>{
    let user = await userService.registerUser(req.body);
    res.success(user);
})
//用户登陆
router.post("/login",async (req,res)=>{
    console.log(req.body);
    let token = await userService.loginUser(req.body);
    res.success({
        token
    })
})

//删除用户
router.delete("/:username",async(req,res)=>{
    console.log(req.params.username);
    await userService.deleteUser(req.params.username);
})
//更新用户信息
router.put("/:id",async (req,res)=>{
    console.log(req.params.id ,await req.body);
    let newVar = await userService.updateUser(req.params.id,req.body);
    if(newVar.n<1){
        throw Error("用户更新失败!")
    }
    res.success("用户更新成功!")
})


//
module.exports=router;