var starObj = function(){
    this.x ;
    this.y;
};

starObj.prototype.init = function(){
    this.x= Math.random()*330+20;
    this.y = Math.random()*260+10;
    this.picNo = Math.floor(Math.random()*7);
    this.timer = 0;
    this.xpd = Math.random()*3-1.5;
    this.ypd = Math.random()*3-1.5;

};

starObj.prototype.update = function(){
    this.x += this.xpd * deltaTime * 0.004;
    this.y += this.ypd * deltaTime *0.004;
    this.timer += deltaTime;
    if(this.x>360||this.x<15||this.y>310||this.y<10){
      this.init();
      return;
    }
    if(this.timer>50){
        this.picNo += 1;
        this.picNo %=7;
        this.timer = 0;
    }



}
starObj.prototype.draw = function(){
    ctx.save();
    ctx.globalAlpha = life;
    ctx.drawImage(starpic,this.picNo*7,0,7,7,this.x,this.y,7,7);
    ctx.restore();
};


function drawStars(){
    for (var i =0;i<num;i++){
        stars[i].draw();
        stars[i].update();
    }
}
function aliveUpdate(){
    if(switch1){
  life += 0.03 *deltaTime*0.05;
  if(life>1)
      life = 1;
    }
    else{
        life -=0.03*deltaTime*0.05;
        if(life<0){
            life =0;
        }

    }
}