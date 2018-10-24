// Variables

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
	
var mode = 0;
var color = "red";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function changeGamemode (mode) {
	if(color == "red"){
		color = "blue";
	}else{
		color = "red";
	}
	
	draw(mode);
	
 
}

window.onload = welcome();
function draw(mode){
	var row = 10;
	var col = 10;
	gamemode = this.mode;
	
	alert ("In functopn draw");
	
	
	
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
					ctx.fillStyle = color;
					ctx.fillRect(x,y,90,90);
					
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
	ctx.font = "50px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("Welcome to Griffin Army Checker", canvas.width/2, canvas.height/2);
}

function initialize(){
	gameBoard = [ 
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
	draw(mode);

				
				
}

function selectPiece(i,j){
	
	
	
	
	alert ("piece is selected");
	
}
var newRow = 0;
var newCol = 0;
var selectected = 0;
var playerTurn = 1;

function changeTurn(){
	if(playerTurn == 1){
		playerTurn = 2;
	}else{
		playerTurn = 1;
	}
}

function movePiece(y1,x1,y2,x2){
	
	gameBoard[y1][x1] = gameBoard[y2][x2];
	//alert ("iam at movePiece fuction"+y2+x2+y1+x1)
	gameBoard[y2][x2] = 0;
	draw(mode);
	
}
function jumpPiece(y1,x1,y2,x2){
	
	gameBoard[y1][x1] = gameBoard[y2][x2];
	//alert ("iam at movePiece fuction"+y2+x2+y1+x1)
	gameBoard[y2][x2] = 0;
	if(y1 == y2+2){
		if (x1 == x2+2){
			gameBoard[y2+1][x2+1] = 0;
		}else{
			gameBoard[y2+1][x2-1] = 0;
		}
		
	}else if (y1 == y2-2){
		if (x1 == x2+2){
			gameBoard[y2-1][x2+1] = 0;
		}else{
			gameBoard[y2-1][x2-1] = 0;
		}
	}
	if (isWinner()){.
		
		alert ("you win");
		initialize();
	}
	draw(mode);
}

function canMove(oldy,oldx,newy,newx){
	var can = false;
	if (playerTurn == 1){
		if (oldy == newy-1 &&(newx == oldx+1 || newx == oldx-1)){
			if(gameBoard[newY][newX] ==0){
				can = true;
			}
		}else{
			can = false;
		
		}
	}else if (playerTurn == 2){
		if (oldy == newy+1 &&(oldx == newx+1 || oldx == newx-1)){
			if(gameBoard[newY][newX] ==0){
					can = true;
			}
		}else{
			can = false;
		
		}
	}
	if (newx == 0 || newy == 0 || newx ==9 || newy == 9){
		can = false;
	}
	return can;
	
	
}

function canJump(oldy,oldx,newy,newx){
	var can = false;
	if (playerTurn == 1){
		if (oldy == newy-2 &&(newx == oldx+2 || newx == oldx-2)){
			if(gameBoard[newY][newX] ==0){
				can = true;
			}
		}else{
			can = false;
		
		}
	}else if (playerTurn == 2){
		if (oldy == newy+2 &&(oldx == newx+2 || oldx == newx-2)){
			if(gameBoard[newY][newX] ==0){
					can = true;
			}
		}else{
			can = false;
		
		}
	}
	if (newx == 0 || newy == 0 || newx ==9 || newy == 9){
		can = false;
	}
	return can;
	
	
}

function isWinner(){
	var count = 0;
	var row1 = 10;
	var col1 = 10;
	
	for(i = 0; i<row1; i++){
		for( j= 0; j<col1; j++){
			if (playerTurn ==1){
				if (gameBoard[i][j] == 2){
					count++;
				}
				
			}else {
				if (gameBoard[i][j] == 1){
					count++
				}
			}
		}
	}
	alert ("completed is winner function");
	return (count == 0)
}

function selectPiece(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    
	var wid = x*90;
	var hei = y*90;
	newX = Math.floor(x/90);
	newY = Math.floor(y/90);

	
	

	
	ctx.clearRect (wid,hei,90,90);
	
	if (selectected == 1){
		selectected = 0;
		if (canMove(newRow,newCol,newY,newX)){
			changeTurn();
			movePiece(newY,newX,newRow,newCol);
		}else if (canJump(newRow,newCol,newY,newX)){
			changeTurn();
			jumpPiece(newY,newX,newRow,newCol);
		}
		
	
		
		
	}else{
		
		if(gameBoard[newY][newX] ==1 && playerTurn == 1){
			alert("Piece at row " + newY + " and column : " + newX+ "selected");
			selectected = 1;
	
			newRow = newY;
			newCol = newX;
		}else if(gameBoard[newY][newX] ==2 && playerTurn == 2){
			alert("Piece at row " + newY + " and column : " + newX+ "selected");
			selectected = 1;
	
			newRow = newY;
			newCol = newX;
		}else{
			selectected = 0;
		}
	}
	
}
function enterName() {
	var userelement = document.getElementById("userelement").value;
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "45px Veranda";
	ctx.fillStyle = "blue";
	ctx.textAlign = "center";
	ctx.fillText("Welcome, " + userelement + "!", canvas.width/2, canvas.height/11);
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
