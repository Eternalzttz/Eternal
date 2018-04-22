var can;
var ctx;
var w;
var h;
var moonpic = new Image();
var starpic = new Image();


var num = 40;
var stars = [];
var lastTime ;
var deltaTime;
var switch1 = false;
var life = 0;

var moon = 0;


function init(){
    can =  document.getElementById("canvas");
    ctx = can.getContext("2d");
    w = can.width;
    h = can.height;
    document.addEventListener("mousemove",mousemove,false);
    moonpic.src = "moon.jpg";
    starpic.src = "star.png";
    for (var i = 0;i<num;i++){
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime = Date.now();
   gameLoop();

}
document.body.onload = init;
function gameLoop(){
    window.requestAnimationFrame(gameLoop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    drawMoon();
    drawStars();
    aliveUpdate();

}
function drawBackground(){
    ctx.fillStyle = "#393550";
    ctx.fillRect(0,0,w,h);
}

function drawMoon(){
    ctx.drawImage(moonpic,10,10,360,300);
}

function mousemove(e){



    if(e.offsetX || e.layerX){
        var cake = document.getElementById("cakediv");
        var app = document.getElementById("speak");
        var px = e.offsetX === undefined ? e.layerX:e.offsetX;
        var py = e.offsetY === undefined ? e.layerY:e.offsetY;
        console.log(px);
        console.log(py);
        if(px<325&&px>225&&py<200&&py>100&&moon ===0 && start === 1){
            moon++;
            if(moon === 1){
                document.getElementById("cakediv").className = "cakediv423";
                document.getElementById("cake41").className = "cake423";
                moonpic.src = "moon423.jpg";
               cake.style.cssText= "animation:cakemove1 5s; animation-fill-mode:forwards;";

               app.style.cssText = " marginTop:520px;animation:speakapp1 3s; animation-fill-mode:forwards; animation-delay:4s;"
            }
        }

        else if(px<365&&px>20&&py>20&&py<310&&switch1 == false)  {
           switch1 = true;
       }
       else if(px<365&&px>20&&py>20&&py<310&&switch1 == true){
           switch1 = false;
       }
    }

}