//设置不同等级用户的权限
let role_permissions=[
    {
        role:0,
        permissions:[
            /.*\/product/,
            /.*\/order/,
            /.*\/category/
        ]
    },
    {
        role:100,
        permissions:[
            //任意路径
            /.*/
        ]
    }
];
module.exports=(req,res,next)=>{
    let isletgo=false;
    //对req.url对象进行判断检查，请求能到达这一步有两种情况
    // 1/没有登陆且访问的是注册或登陆页面
    // 2/登陆了
    if(req.user){
        role_permissions.forEach(obj=>{
            if(obj.role===req.user.role){
                obj.permissions.forEach(p=>{
                    if(p.test(req.url)){
                        isletgo=true;
                    }
                })
            }
        })
        if(!isletgo){
            throw Error("当前用户权限不足！")
        }
    }
    next();
}