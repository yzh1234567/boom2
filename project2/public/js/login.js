$(document).ready(function(){
    $("#footer").load("./footer.html");
    //��ҳ��װ��ʱ����IDΪ#labels��DOMԪ�������footer.html�����ݡ�
})
window.onload=function(){
    //���Ҵ����¼��ı�����
    var form=document.forms[0];
    //��ȡ��Ԫ��
    var txtName=form.uname;
    var txtPwd=form.upwd;
    var isRight1=false;
    var isRight2=false;
    //txtName�󶨴����¼�
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
    //txtPwd�󶨴����¼�
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
    //��btn�󶨵���¼�����
    var btnSubmit=form.elements[form.length-1];
    btnSubmit.onclick=function(){
        if(isRight1&&isRight2){
            form.submit();
        }
    }
}

