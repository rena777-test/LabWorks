/* window.addEventListener("load", init);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    
    let hue = [
        [255,0,0],
        [255,255,0],
        [0,255,0],
        [0,255,255],
        [0,0,255],
        [255,0,255]
    ];
    for(let i = 0; i < 5; i++){
       
        gradient = context.createLinearGradient(0,0, canvas.width,canvas.height);
        color = "rgb(" + hue[i][0] + "," + hue[i][1] + "," + hue[i][2] + ")";
        gradient.addColorStop(i * 1/6, color);
        console.log(gradient);
    }

   
    context.fillStyle = gradient;
    context.beginPath();
    context.moveTo(30, 10);
    context.lineTo(210, 10);
    context.lineTo(230, 110);
    context.lineTo(10, 110);
    context.closePath();
    context.stroke();
    
} */