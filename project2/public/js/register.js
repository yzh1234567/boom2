$(document).ready(function(){
    $("#footer").load("./footer.html");
    //在页面装载时，在ID为#labels的DOM元素里插入footer.html的内容。
})
//注册信息验证
window.onload=function(){
    //寻找表单对象
    var form=document.forms[0];
    // 创建一个变量isright1-6，来判断提交的数据是否满足规则，满足规则(ture)才被提交
    var isright1=false;
    var isright2=false;
    var isright3=false;
    var isright4=false;
    var isright5=false;
    var isright6=false;
//用户名验证
    //查询触发事件元素
    var txtName=form.uname;
    //绑定获取焦点函数
    txtName.onfocus=function(){
        s1.innerHTML="用户名不能超过12个字符,且开头不能是数字";
    };
    //绑定失去焦点函数
       txtName.onblur=function(){
        var txtName=this;
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.status==200&&xhr.readyState==4){
                var result=xhr.responseText;
                if(result==0){s1.innerHTML="用户名不能为空";isright1=false;}
                else if(result==1){s1.innerHTML="用户名被占用";isright1=false;}
                else if(result==2){s1.innerHTML="用户名合法";isright1=true;}
                else if(result==3){s1.innerHTML="用户名不满足条件";isright1=false;}
            }
        }
        xhr.open("post","user/uname",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send("uname="+txtName.value)
    };
//密码验证
    //查询触发事件元素
     var txtPwd=form.upwd;
    //绑定获取焦点函数
     txtPwd.onfocus=function(){
        s2.innerHTML="请用6至20位字母/数字/标点符号组成密码";
    }
    //绑定失去焦点事件
    txtPwd.onblur=function() {
        var txtPwd = this;
        var reg=/^[a-xA-X.;?!@~#$%<>+=-]{1}[\w.;?!@~#$%<>+=-]{5,19}$/;
        if(!txtPwd.value){s2.innerHTML="密码不能为空";isright2=false;}
        else if(reg.test(txtPwd.value)){s2.innerHTML="密码合法";isright2=true;}
        else{s2.innerHTML="密码不合法";isright2=false;}
    }
//确认密码验证
    //获取触发事件元素
    var txtPwd1=form.upwd1;
    //绑定获取焦点函数
    txtPwd1.onfocus=function(){
        s3.innerHTML="确认密码不能为空";
    }
    //绑定失去焦点函数
    txtPwd1.onblur=function(){
        var txtPwd1=this;
        if(txtPwd1.value==txtPwd.value){
            s3.innerHTML="密码正确";
            isright3=true;
        }else{
            s3.innerHTML="密码不正确";
            isright3=false;
        }
    }
//验证手机号码
    //获取触发事件函数；
    var txtPhone=form.phone;
    txtPhone.onfocus=function(){
        s4.innerHTML="手机号码不能为空";
    }
    txtPhone.onblur=function(){
        var txtPhone=this;
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.status==200&&xhr.readyState==4){
                var result=xhr.responseText;
                if(result==0){s3.innerHTML="手机号码不能为空";isright4=false;}
                else if (result==1){s3.innerHTML="手机号码已经注册";isright4=false;}
                else if(result==2) {s3.innerHTML="手机号码正确";isright4=true;}
                else{s3.innerHTML="请输入正确的手机号码";isright4=true;}
            }
            }
        xhr.open("post","user/phone",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send("phone="+txtPhone.value);
        }
//验证手机短信验证码


//验证邮箱
    var txtEmail=form.email;
    txt.Email.onfocus=function(){
        s6.innerHTML="请填写一个合法的电子邮箱";
    }
    txtEmail.onblur=function(){
        var txtEmail=this;
        var reg=/^[0-9a-xA-X][\w.]{0,19}@[0-9a-xA-X][\w.-]+.[a-xA-X]{2,14}$/;
        if(!txtEmail.value){s5.innerHTML="邮箱不能为空";isright6=false;}
        else if(reg.test(txtEmail.value)){s5.innerHTML="邮箱正确";isright6=true;}
        else{s5.innerHTML="邮箱不正确";isright6=false;}
    }
    //提交表单信息
    if(isright1&&isright2&&isright3&&isright4&&isright5&&isright6){
        //查找触发事件元素；
        var btnSubmit=document.querySelector("form.my_register>ul>li.reg_item7>button")
        btn.onclick=function(){
            form.submit();
        }
    }
}
