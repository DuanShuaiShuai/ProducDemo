module.exports=(req,res,next)=>{
    res.success=(data)=>{
        res.send({
            type:1,
            msg:"操作成功！",
            data:data,
        })
    }
    res.fail=(msg)=>{
        res.send({
            type:-1,
            msg:msg
        })
    }
    next();
}