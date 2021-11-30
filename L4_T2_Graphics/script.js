
function clickHandler(ev){// div на который нажала
  
   let elemImg = ev.getElementsByTagName('img')[0];//картинка на которую нажала
   
   let container = document.getElementById("display");// куда буду вставлять картинку

   let imageNew = document.createElement('img');// создание новой картинки - большой!!
   imageNew.setAttribute("src", elemImg.src);//src маленькой картинки копирую в большую картинку
   imageNew.style.width = 778 + "px";
   imageNew.style.height = 480 + "px";
   
    if( container.hasChildNodes() ){
      let bigImg = container.getElementsByTagName('img')[0];
      bigImg.setAttribute("src", elemImg.src);
    }
    else{
      container.append(imageNew);
    }

}


