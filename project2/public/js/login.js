$(document).ready(function(){
    $("#footer").load("./footer.html");
    //在页面装载时，在ID为#labels的DOM元素里插入footer.html的内容。
})
window.onload=function(){
    //查找触发事件的表单对象
    var form=document.forms[0];
    //获取表单元素
    var txtName=form.uname;
    var txtPwd=form.upwd;
    var isRight1=false;
    var isRight2=false;
    //txtName绑定触发事件
    txtName.onblur=function(){
        var txtName=this;
        var div1=document.querySelector("form.login>div.hide1");
        var reg=/^[a-zA-Z]\w{0,10}$/;
        if(reg.test(txtName.value)){
            isRight1=true;
            div1.style.display="none";
        }else{
            div1.style.display="block";
            isRight1=false;
        }
    };
    //txtPwd绑定触发事件
    txtPwd.onblur=function(){
        var txtPwd=this;
        var div2=document.querySelector("form.login>div.hide2");
        var reg=/^[a-xA-X.;?!@~#$%<>+=-][\w.;?!@~#$%<>+=-]{5,19}$/;
        if(reg.test(txtPwd.value)){
            isRight2=true;
            div2.style.display="none";
        }else{
            div2.style.display="block";
            isRight2=false;
        }
    };
    //给btn绑定点击事件函数
    var btnSubmit=form.elements[form.length-1];
    btnSubmit.onclick=function(){
        if(isRight1&&isRight2){
            form.submit();
        }
    }
}

