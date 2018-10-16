var row = 10;
var col = 10;
var wChecker = [];
var bChecker = [];
var board = [];
var totalSeconds = 0;
window.onload = draw();


function setup(){
	draw();
}
window.onload = alert ("Welcome to Griffin Army Checkers");

function draw(){
	//alert ("In function draw");
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	
	for (i = 1; i < row-1; i++){
		for (j=1; j< col-1; j++){
			var x = i*90;
			var y = j*90;
			var mode = 0;
			
			if((i+j)%2 == 0){
				ctx.fillStyle = "black";
				ctx.fillRect(x,y,90,90);
			
			}else{
				ctx.fillStyle = "red";
				ctx.fillRect(x,y,90,90);
				
			}
		}
	}
}

function enterName() {
	var userelement = document.getElementById("userelement").value;
    document.getElementById("demo").innerHTML = "Welcome, " + userelement +"!";
}

function draw1(){

	//alert ("In functionn draw");
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
		
	for (i = 1; i < row-1; i++){
		for (j=1; j< col-1; j++){
			var x = i*90;
			var y = j*90;
			var mode = 0;
			
			if((i+j)%2 == 0){
				ctx.fillStyle = "black";
				ctx.fillRect(x,y,90,90);
			
			}else{
				ctx.fillStyle = "blue";
				ctx.fillRect(x,y,90,90);
				
			}
			
		}
	}
}
//setup();

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
