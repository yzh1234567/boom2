$(function(){
    $("#my_header").load("./header.html");
    //��ҳ��װ��ʱ����IDΪ#labels��DOMԪ�������header.html�����ݡ�
    $("#my_footer").load("./footer.html");
    //��ҳ��װ��ʱ����IDΪ#labels��DOMԪ�������footer.html�����ݡ�
    $("[data-toggle=shopping_car]").click(function(){
        var i=$("#my_shopping_car>input").val();
        console.log(i);
        $("#my_shopping_car>input").val(parseInt(i)+1);

    })
});





