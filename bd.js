let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
let db = mongoose.connection;
db.on("error",(error)=>{
    console.log(error);
})
db.on("open",()=>{
    console.log("mongondb connect sucessfully");
})
