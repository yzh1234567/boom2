const express=require("express");
const bodyParser=require("body-parser");
const userRouter=require("./routers/user.js");
var server=express();
server.listen(3000);
//使用express模块下的静态托管；
server.use(express.static("public"));
//使用第三方模块body-parser获取浏览器请求数据
server.use(bodyParser.urlencoded({
       extended:false,
}));
//把路由器“/register”，挂载在“/user”下
server.use("/user",userRouter);