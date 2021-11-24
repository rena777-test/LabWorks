window.onload = init; 

function init(){
    enlargeImage("rabbits", "img/1558692302_2.jpeg");
    enlargeImage("cat", "img/cat.jpg");
    enlargeImage("lion", "img/lion.jpg");
    enlargeImage("pair", "img/path.jpg");
    enlargeImage("tiger", "img/tigers-face.jpg");
}

function enlargeImage(id, path){
    let elem = document.getElementById(id);
    console.dir(elem);
    if(elem.nodeName.toLowerCase() != "img")return;

    let basePath = elem.src;

    elem.addEventListener("click", function(){this.src = path;
        this.style.width = 240 + "px";});
    elem.addEventListener("mouseout", function(){
        this.style.width = 90 + "px";
        this.src = basePath;
       });
}
