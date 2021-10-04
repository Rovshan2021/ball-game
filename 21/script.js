let bar = document.getElementById("seki");
let ball = document.getElementById("top");
let btn = document.getElementById("btn");

let barX = 0;
let ballX = 0;
let ballY = 0;
let t = 0;

let dx = 5;
let dy = 5;



let interval = setInterval(ballMove, 40);

document.onkeydown = Key;

function Key(e){

    e = e || window.event;


    if(e.keyCode == "37"){
        if(barX>0){
            barX -= 25
        }
    }

    if(e.keyCode == "39"){
        if(barX<700){
            barX += 25;
        }
    }


    bar.style.left = barX + "px";

}

function ballMove(){
    if(ballX<0 || ballX> 750){
        dx *= -1;
        
    }

    if(ballY<0){
        dy*= -1;
        dx++;
        dy++;
    }else if( ballY>550 && ballX >= barX-25 && ballX <= barX + 100){
        dy*= -1;
        t++;
        
        document.getElementById("xal").innerHTML = `Sizin xaliniz : ${t} `;
        document.getElementById("umumi").style.backgroundColor = RandomColor();
        document.getElementById("umumi").style.borderColor = RandomColor();
    }

    else if(ballY>550){
        document.getElementById("umumi").style.opacity = .7;
        document.getElementById("umumi").innerHTML = ` Siz uduzdunuz sizin xaliniz ${t}`;
        btn.style.display = "inline";
    }

    


ballX += dx;
ballY += dy;

ball.style.left = ballX + "px";
ball.style.top = ballY + "px";

}
function RandomColor(){
    let colors = '0123456789ABCDEF';
    let hash = '#';
    for(let i = 0; i < 6; i++){
     hash += colors[Math.floor(Math.random() * 16)];
    }
    return hash;
    }

function re(){
    location.reload();
}


