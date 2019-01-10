const mysql=require("mysql");
pool=mysql.createPool({
     host:"localhost",
	 port:"3306",
	 user:"root",
	 password:"",
	 database:"coobar",
	 connection:20,
});
module.exports=pool;