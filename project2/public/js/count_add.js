
window.onload=function() {
    //给F1_product下面的数量按钮添加事件
    var spans = document.querySelectorAll("div.F1>div>div>span");
    //遍历每个span并为其添加事件
    for(var span of spans){
        span.onclick=function(){
            var span=this;
            //判断span标签中的内容，来执行加减法
            var n = parseInt(span.parentNode.children[2].value);
            if (span.innerHTML == "+") {
                n++;
            } else if (span.innerHTML == "-" && n > 1) {
                n--;
            }
            span.parentNode.children[2].value = n;
        }
        //鼠标按下时添加事件函数
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


