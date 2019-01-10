const express=require("express");
const pool=require("../mysql.js");
//使用express模块创建路由器
var router=express.Router();
//创建用户名是否被占有路由；
router.post("/uname",(req,res)=>{
       var obj=req.body;
	   var str=obj.uname;
	   var str1=/^[\u4e00-\u9fa5a-xA-X]{1}[\u4e00-\u9fa5\w]{0,11}$/;
       if(!str){res.send("0")}
	   else if(str1.test(str)){
		   var sql="select * from coobar_user where uname=?";
		   pool.query(sql,[str],(err,result)=>{
		         if(err){throw err};
				 if(result.length>0){res.send("1")}
				    else{res.send("2")};
		   })
	   }else{res.send("3")};
});
//创建手机号码是否已经注册的路由
router.post("/phone",(req,res)=>{
      var obj=req.body;
	  var $phone=obj.phone;
      var str1=/^1[35789]\d{9}$/;
	  if(!$phone){res.send("0")}
	  else if(str1.test($phone)){
	       var sql="select * from coobar_user where phone=?";
		   pool.query(sql,[$phone],(err,result)=>{
		        if(err) throw err;
				if(result.length>0){res.send("1")}
				   else{res.send("2")}
		   });
	  }else{res.send("3");};
});
//创建register路由；
router.post("/register",(req,res)=>{
    var obj=req.body;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	var $phone=obj.phone;
	var $sex=obj.sex;
	var $email=obj.email;
	if(!$uname){res.send("用户名不能为空")};
    if(!$upwd){res.send("密码不能为空")};
	if(!$phone){res.send("手机号码不能为空")};
	if(!$sex){res.send("性别不能为空")};
	if(!$email){res.send("电子邮箱不能为空")};
	pool.query(`insert into coobar_user (uid,uname,upwd,phone,sex,email)values(null,?,?,?,?,?)`,
		[$uname,$upwd,$phone,$sex,$email],(err,result)=>{
	        if(err)throw err;
			if(result.affectedRows>0){res.send("注册成功")
				}else(res.send("注册失败"))
	   })
});
//创建登录路由；
router.post("/login",(req,res)=>{
       var obj=req.body;
	   var $uname=obj.uname;
	   var $upwd=obj.upwd;
	   if(!uname){res.send="0"};
	   if(!upwd){res.send="1"};
	   pool.query(`select * from coobar_user where uname=? or phone=? or email=? and upwd=?`,[$uname,$uname,$uname,$upwd],(err,result)=>{
	        if(err)throw err;
			if(result.length>0){res.send("2")
				}else{res.send("3")}
			   
	   });
});
//创建显示数据路由；
router.get("/admin",(req,res)=>{
       pool.query(`select * from coobar_user`,(err,result)=>{
	        if(err)throw err;
			if(result.length>0){res.send(result)}
	   });
});
//删除用户路由
router.post("/delete",(req,res)=>{
        var obj=req.body;
		var $uid=obj.uid;
		var sql="delete from coobar_user where uid=?";
		pool.query(sql,[$uid],(err,result)=>{
		        if(err) throw err;
				if(result.affectedRows>0){res.send("0")}
				    else {res.send("1")}
		});
});
//更改用户信息路由
router.post("/update",(req,res)=>{
       var obj=req.body;
	   var $uid=obj.uid;
	   var $uname=obj.uname;
	   var $upwd=obj.upwd;
	   var $phone=obj.phone;
	   var $sex=obj.sex;
	   var $email=obj.email;
	   var $birthday=obj.birthday;
	   var sql="update coobar_user set uname=?,upwd=?,phone=?,sex=?,email=?,birthday=? where uid=?";
	   pool.query(sql,[$uname,$upwd,$phone,$sex,$email,$birthday,$uid],(err,result)=>{
	           if(err) throw err;
			   if(result.affectedRows>0){res.send("0")}
			      else{res.send("1")}
	   });
});
//显示单条用户信息路由
router.get("/list",(req,res)=>{
       var $uid=req.query.uid;
	   var sql="select * from coobar_user where uid=?";
	   pool.query(sql,[$uid],(err,result)=>{
	        if(err) throw err;
			if(result.length>0){res.send(result)}
			   else{res.send("0")};
	   });
});

module.exports=router;
