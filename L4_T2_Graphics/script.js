window.onload = init; 

function init(){
    enlargeImage("rabbits", "img/cat.jpg");
}

function enlargeImage(id, path){
    let elem = document.getElementById(id);
    console.dir(elem);
    if(elem.nodeName.toLowerCase() != "img")return;

    let basePath = elem.src ;

    elem.addEventListener("click", function(){this.src = path;})
    elem.addEventListener("click", function(){this.src = basePath;})

}
