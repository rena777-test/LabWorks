window.addEventListener("load", init, false);

function init(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.save();
    context.translate(45,20);

    context.beginPath();
    context.moveTo(40,50);
    context.lineTo(40,160);

    context.moveTo(50,50);
    context.lineTo(50,160);
 
    context.moveTo(60,50);
    context.lineTo(60,160);

    context.moveTo(70,50);
    context.lineTo(70,160);

    context.moveTo(80,50);
    context.lineTo(80,160);

    context.moveTo(90,50);
    context.lineTo(90,160);
 
    context.moveTo(100,50);
    context.lineTo(100,160);

    context.moveTo(110,50);
    context.lineTo(110,160);

    context.moveTo(120,50);
    context.lineTo(120,160);
    context.closePath()
    context.stroke();
    context.restore();
  
    context.translate(45,20);
    context.beginPath();
    context.moveTo(30,60);
    context.lineTo(130,60);

    context.moveTo(30,70);
    context.lineTo(130,70);
 
    context.moveTo(30,80);
    context.lineTo(130,80);

    context.moveTo(30,90);
    context.lineTo(130,90);

    context.moveTo(30,100);
    context.lineTo(130,100);

    context.moveTo(30,110);
    context.lineTo(130,110);
 
    context.moveTo(30,120);
    context.lineTo(130,120);

    context.moveTo(30,130);
    context.lineTo(130,130);

    context.moveTo(30,140);
    context.lineTo(130,140);

    context.moveTo(30,150);
    context.lineTo(130,150);

    context.closePath()
    context.stroke();
}