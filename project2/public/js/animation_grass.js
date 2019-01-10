window.onload=function() {
    grasses = document.querySelectorAll("div.my_animation>div.field>div.grass");
    for (var i = 0; i < grasses.length; i++) {
        var n = Math.random() * 10 + 8;
        grasses[i].style = `width:${n}px;
        height:${Math.random() * 18 + 2.56}vh;
        transform:rotateZ(${Math.random() * 20 - 6}deg);
        animation-delay:${Math.random() * 11}s;`;
    }
}