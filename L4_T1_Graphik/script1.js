window.onload = init;
let flag;

let $ = function (id) {
    return document.getElementById(id);
}

function init() {
    $("changeImage").addEventListener("click", clickHandlerImage);
    $("changeMap").addEventListener("click", clickHandlerMap);
    $("changeLogo").addEventListener("click", clickHandlerLogo);
}

function clickHandlerImage(){
    if(flag){
        $("imgBtn").src = "imgs/button.jpg";
    }else{
        $("imgBtn").src = "imgs/button-hover.jpg";
    }
    flag = !flag;
}

function clickHandlerMap(){
    if(flag){
        $("imgBtn").src = "imgs/button.jpg";
    }else{
        $("imgBtn").src = "imgs/frame1.jpg";
    }
    flag = !flag;
}

function clickHandlerLogo(){
    if(flag){
        $("imgBtn").src = "imgs/button.jpg";
    }else{
        $("imgBtn").src = "imgs/Logo.png";
    }
    flag = !flag;
}