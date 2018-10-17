var gameBoard = [ 
	[0, 0, 0,  0,  0,  0,  0,  0,  0, 0],
    [0, 0, 1,  0,  1,  0,  1,  0,  1, 0],
    [0, 1, 0,  1,  0,  1,  0,  1,  0, 0],
    [0, 0, 1,  0,  1,  0,  1,  0,  1, 0],
    [0, 0, 0,  0,  0,  0,  0,  0,  0, 0],
    [0, 0, 0,  0,  0,  0,  0,  0,  0, 0],
    [0, 2, 0,  2,  0,  2,  0,  2,  0, 0],
    [0, 0, 2,  0,  2,  0,  2,  0,  2, 0],
    [0, 2, 0,  2,  0,  2,  0,  2,  0, 0],
	[0, 0, 0,  0,  0,  0,  0,  0,  0, 0]];
var row = 10;
var col = 10;
var wChecker = [];
var bChecker = [];
var board = [];
var totalSeconds = 0;
window.onload = draw();

var mode = 1;
var color = "red";




function changeGamemode (mode) {
	if (this.mode == 0){
		this.mode = 1;
	}else{
		this.mode = 0;
	}
	draw(mode);
}
	
 
function setup(){
	draw();
}
window.onload = welcome();

function draw(mode){
	var row = 10;
	var col = 10;
	gamemode = this.mode;
	
	alert ("In functopn draw");
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	
	for (i = 0; i < row; i++){
		for (j=0; j< col; j++){
			var y = i*90;
			var x = j*90;
			
			var s = gameBoard[i][j];
			
			
			

			if (i == 0 || j == 0 || i == 9 || j==9){
				ctx.fillStyle = "#BA7A3A";
				ctx.fillRect(x,y,90,90);
			}else{
				if((i+j)%2 == 0){
					
					ctx.fillStyle = "black";
					ctx.fillRect(x,y,90,90);
					
				
				}else{
					if (gamemode == 0){
						ctx.fillStyle = "red";
						ctx.fillRect(x,y,90,90);
					}else{
						ctx.fillStyle = "blue";
						ctx.fillRect(x,y,90,90);
					}
				}
				
			}
			
			if (s ==1){
				
				ctx.beginPath();
				ctx.arc(x+45,y+45,40,0,2*Math.PI);
				ctx.fillStyle= "Green";
				ctx.fill();
			}
			if (s ==2){
				
				ctx.beginPath();
				ctx.arc(x+45,y+45,40,0,2*Math.PI);
				ctx.fillStyle= "white";
				ctx.fill();
			}
			
			
		}
	}
}

function welcome(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "50px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("Welcome to Griffin Army Checker", canvas.width/2, canvas.height/2);
}
function enterName() {
	var userelement = document.getElementById("userelement").value;
    document.getElementById("message").innerHTML = "Welcome, " + userelement +"!";
}



function button() {
    let butt = document.getElementById("Button");
}

function stopWatch() {
    let time, intervalId;
    let startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", function () {
        time = -1;
        incrementTime();
        intervalId = setInterval(incrementTime, 1000);
        startBtn.disabled = true;
    });

    stopBtn.addEventListener("click", function () {
        clearInterval(intervalId);
        startBtn.disabled = false;
    });

    function incrementTime() {
        time++;
        document.getElementById("time").textContent =
                ("0" + Math.trunc(time / 60)).slice(-2) +
                ":" + ("0" + (time % 60)).slice(-2);
    }
}
