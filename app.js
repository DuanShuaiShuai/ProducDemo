require('express-async-errors');
require("./bd")
let express = require("express");
let app= express();

//获取请求体
var bodyParser = require('body-parser')
let user = require("./router/user");
let category = require("./router/category");
let products = require("./router/product");
let order =require("./router/order")
let morgan = require("morgan");

//解析请求体
app.use(bodyParser.json())


app.use(morgan('combined'))


app.use(require("./mid/res"))
app.use(require("./mid/token"))
app.use(require("./mid/role_permissions"))
app.use("/user",user)

app.use("/category",category);
app.use("/product",products);
app.use("/order",order)
app.use((err,req,res,next)=>{
    res.fail(err.toString());
})
app.listen(4000);