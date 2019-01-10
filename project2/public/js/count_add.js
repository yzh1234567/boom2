
window.onload=function() {
    //��F1_product�����������ť����¼�
    var spans = document.querySelectorAll("div.F1>div>div>span");
    //����ÿ��span��Ϊ������¼�
    for(var span of spans){
        span.onclick=function(){
            var span=this;
            //�ж�span��ǩ�е����ݣ���ִ�мӼ���
            var n = parseInt(span.parentNode.children[2].value);
            if (span.innerHTML == "+") {
                n++;
            } else if (span.innerHTML == "-" && n > 1) {
                n--;
            }
            span.parentNode.children[2].value = n;
        }
        //��갴��ʱ����¼�����
        span.addEventListener("mousedown",function(){
            var span=this;
            span.style="border:2px solid #00c65d";
        });
        span.addEventListener("mouseup",function(){
            var span=this;
            span.style="border:none";
        });

    }
}


