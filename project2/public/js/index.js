$(function(){
    $("#my_header").load("./header.html");
    //在页面装载时，在ID为#labels的DOM元素里插入header.html的内容。
    $("#my_footer").load("./footer.html");
    //在页面装载时，在ID为#labels的DOM元素里插入footer.html的内容。
    $("[data-toggle=shopping_car]").click(function(){
        var i=$("#my_shopping_car>input").val();
        console.log(i);
        $("#my_shopping_car>input").val(parseInt(i)+1);

    })
});





