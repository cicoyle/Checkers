





function setup(){
	
	draw();
}
window.onload = alert ("Welcome to Griffin Army Checker");
function draw(){
	var row = 10;
	var col = 10;
	alert ("In functopn draw");
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
function draw1(){
	var row = 10;
	var col = 10;
	alert ("In functopn draw");
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
