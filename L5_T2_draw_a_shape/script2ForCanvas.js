window.addEventListener("load", init, false);
let canvas;
let context;

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    drawAFigure();
}

function drawAFigure() {
    context.beginPath();
    context.moveTo(100, 80);//1
    context.bezierCurveTo(250, 110, 400, 20, 700, 80);//2
    context.lineTo(700, 405);//3
    context.bezierCurveTo(450, 350, 180, 460, 100, 405);//4

    context.shadowColor = "gray";//_Shadows
    context.shadowOffsetX = 5;//тень
    context.shadowOffsetY = 5;
    //Степень размытия
    context.shadowBlur = 15;

    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = 'red';
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();//блок белый
    context.moveTo(230, 83);
    context.quadraticCurveTo(500, 39, 570, 62);

    context.shadowOffsetX = 0;//тень
    context.shadowBlur = 10;//тень

    context.lineTo(570, 388);
    context.quadraticCurveTo(530, 377, 230, 417);
    context.stroke();

    context.lineWidth = 1;
    context.strokeStyle = "white";
    context.fillStyle = 'white';
    context.closePath();
    context.stroke();
    context.fill();

    context.clearRect(320, 145, 40, 40);
    context.clearRect(430, 145, 40, 40);
    context.clearRect(320, 275, 70, 40);
    context.clearRect(400, 275, 70, 40);

    context.lineWidth = 4;//блок кленовый лист
    context.strokeStyle = "grey";

    context.beginPath();
    context.moveTo(320, 275);
    context.quadraticCurveTo(325, 220, 290, 200);
    context.lineTo(315, 195);//
    context.lineTo(310, 170);//4
    context.lineTo(335, 185);//5
    context.lineTo(345, 170);//6
    context.lineTo(365, 210);//7

    context.lineTo(350, 140);//1.8
    context.lineTo(370, 160);//2.9
    context.lineTo(390, 120);//3.10
    context.lineTo(410, 160);//4.11
    context.lineTo(430, 135);//5.12
    context.lineTo(415, 210);//5.13

    context.lineTo(440, 170);//1.15
    context.lineTo(445, 185);//2.16
    context.lineTo(470, 170);//3.17
    context.lineTo(465, 195);//4.18
    context.lineTo(488, 200);//5.19
    context.quadraticCurveTo(462, 215, 466, 275);//6.20

    context.lineTo(396, 265);//1
    context.lineTo(400, 330);//2
    context.lineTo(391, 330);//3
    context.lineTo(393, 265);//4
    context.lineTo(320, 275);//3
    context.stroke();
    context.closePath();
    context.lineWidth = 1;
    /* context.strokeStyle = 'red'; */
    context.fillStyle = 'red';
    context.fill();
}
