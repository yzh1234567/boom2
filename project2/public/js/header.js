$(function(){
     $("div.my_header_top div.t-left>ul.address").on("click","li",function(){
         $li=$(this);
         $li.parent().prev().html($li.html());
     })
    //给div.my_bottom_middle 下面的button添加点击事件
    $("[data-toggle=search]").click(function(){
          var $value=$(this).prev().val()
        if(!$value){
              // 把进行Ajax请求发送到数据库（后台），对商品详情标题含有搜索字符进行匹配
        }else{
            //打开search.html
            open("http://localhost:3000/search.html")
        }

    })
})