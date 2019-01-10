$(function(){
    //产品图放大镜效果
        var $proPicture=$("#product_detaiil>div.detail_top>div:last-child>div.product_picture");
            var $mpicture=$proPicture.children(":first");
            var $showImg=$mpicture.children(":first")
            var $src=$showImg.attr("src");
            var $sMask=$mpicture.next();
            var $mask=$sMask.next().next();
            var $lgImg=$sMask.next().children(":first").attr("src",`${$src}`);
             //鼠标脱div.mask，放大镜显示产品图
                 $sMask.mousemove(function(e){
                     var top=e.offsetY-50;
                     var left=e.offsetX-50;
                        if(top<0) top=0;
                           else if(top>300) top=300;
                        if(left<0) left=0;
                           else if(left>300) left=300;
                         $mask.css({top,left});
                         $lgImg.css({left:-`${left}`,top:-`${top}`})
                 })
    city2=[
        [{name:"朝阳区"},{name:"西城区"},{name:"海淀区"},{name:"东城区"}],
        [{name:"黄浦区"},{name:"西城区"},{name:"海淀区"},{name:"东城区"}],
        [{name:"渝中区"},{name:"渝北区"},{name:"沙坪坝区"},{name:"两江新区"}],
        [{name:"和平区"},{name:"东丽区"},{name:"海淀区"},{name:"东城区"}],
        [{name:"武汉市"},{name:"荆州市"},{name:"黄冈市"},{name:"天门市"}]
    ];
    city3=[
        [
            [{road:"管庄1"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"管庄2"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"管庄3"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"管庄4"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
        ],
        [
            [{road:"城区1"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"城区2"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"城区3"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"城区4"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
        ],
        [
            [{road:"两路口1"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"两路口2"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"两路口3"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"两路口4"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
        ],
        [
            [{road:"东丽湖街道1"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"东丽湖街道2"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"东丽湖街道3"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"东丽湖街道4"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
        ],
        [
            [{road:"武昌1"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"武昌2"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"武昌3"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
            [{road:"武昌4"},{road:"管庄"},{road:"管庄"},{road:"管庄"}],
        ],
    ];
    $("div.address>div.nav>ul.tabs>li")
        .click(function(){
            var $li=$(this);
            var i=$li.prevAll().length;
            $(".address>.nav>.box").css("left",i*100);
        })
    //点击不同的省市按钮，其相应导航栏的内容变成相信的省市，同时滑向下一个按钮
    $("div.address>div.cities>ul.active>li").click(function(){
        var $li=$(this);
        var i=$li.prevAll().length;
        console.log(i);
        $("div.address>div.nav>ul.tabs>li:first-child").html($li.html());
        $("div.address>div.nav>ul.tabs>li:first-child").next().addClass("active")
        $li.parent().removeClass("active");
        //给$li.parent().next()先清空内容再添加li的
        $li.parent().next().children().remove();
        for(var n=0;n<city2[i].length;n++){
            console.log(city2[i][n]["name"]);
            $li.parent().next().append(`<li>${city2[i][n]["name"]}</li>`)
        }
        $li.parent().next().addClass("active");
        //判断是否需要滑动
        $(".address>.nav>.box").css("left",100);
        //给城市添加事件
        $li.parent().next().on("click","li",function(){
            var $li=$(this);
            var j=$li.prevAll().length;
            console.log(i);
            $("div.address>div.nav>ul.tabs>li:nth-child(2)").html($li.html());
            $li.parent().removeClass("active");
            //给$li.parent().next()先清空内容再添加li的
            $li.parent().next().children().remove();
            for(var n=0;n<city3[i][j].length;n++){
                console.log(city3[i][j][n]["road"]);
                $li.parent().next().append(`<li>${city3[i][j][n]["road"]}</li>`)
            }
            $li.parent().next().addClass("active");
            //判断是否需要滑动
            $(".address>.nav>.box").css("left",200);
            console.log(10);
        })
    })
      //购买数量
          $("div.product_msg>p.pm_item6>span").click(function(){
              var $span=$(this);
              if($span.html()=="+"){
                  var count=parseFloat($span.prev().html());
                  count++;
                  $span.prev().html(count);
              }else if($span.html()=="-"){
                  var count=parseFloat($span.next().html());
                  if(count>1){
                      count--;
                      $span.next().html(count)
                  }
              }
          });
    $("div.product_msg>p.pm_item6>span").mousedown(function(){
          var $span=$(this);
         if($span.html()=="+"||$span.html()=="-"){
             $span.css("border","1px solid #aaa")
         }
    })
    $("div.product_msg>p.pm_item6>span").mouseup(function(){
        var $span=$(this);
        if($span.html()=="+"||$span.html()=="-"){
            $span.css("border","none")
        }
    })
      //  买家推荐
      var $product_top_right=$("#product_detaiil>div.detail_top>div.product div.product_right");
      var move=0;
      function slide(){
          move++;
          if(move>4){move=0};
          $product_top_right.children(":first-child").css("margin-top",-160*move);
      };
      var timer=setInterval(slide,2000);
      $product_top_right.mouseenter(function(){
         clearInterval(timer)
      }) ;
      $product_top_right.mouseleave(function(){
         timer=setInterval(slide,2000);
      }) ;
})
