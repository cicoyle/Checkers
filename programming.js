// Variables for drawing boards and pieces



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

// Functions for board



//This function changesd the game board from day to night mode and vice versa

function changeGamemode (mode) {

	if(color == "red"){

		color = "blue";

	}else{

		color = "red";

	}

	

	draw(mode);

	

 

}

// this function runs welcome function when windows load

window.onload = welcome();



// This function draw the board

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
			if (s ==3){

				

				ctx.beginPath();

				ctx.arc(x+45,y+45,40,0,2*Math.PI);

				ctx.fillStyle= "#5c755e";

				ctx.fill();

			}

			

			

		}

	}

}



// this is the welcome function

function welcome(){

	ctx.font = "50px Comic Sans MS";

	ctx.fillStyle = "red";

	ctx.textAlign = "center";

	ctx.fillText("Welcome to Griffin Army Checker", canvas.width/2, canvas.height/2);

}



// This function initialize the new game

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





//********************** Functionality Functions   **********************************************/





//Variables for playing games

var newRow = 0;

var newCol = 0;

var selectected = 0;

var playerTurn = 1;





// This function determine the player turn

function changeTurn(){

	if(playerTurn == 1){

		playerTurn = 2;

	}else{

		playerTurn = 1;

	}

}



// this function move the selected piece 

function movePiece(y1,x1,y2,x2){

	

	gameBoard[y1][x1] = gameBoard[y2][x2];

	//alert ("iam at movePiece fuction"+y2+x2+y1+x1)

	gameBoard[y2][x2] = 0;

	draw(mode);

	

}



// this function jumps  the selected piece over other player piece

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

	

	draw(mode);

}

// This function varifies if the move is legal

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

// This Function varifies if the jump is legal.

function canJump(oldy,oldx,newy,newx){

	var can = false;

	if (playerTurn == 1){

		if (oldy == newy-2 &&(newx == oldx+2 || newx == oldx-2)){

			if (gameBoard[oldy+1][oldx+1] == 2 && oldx ==newx-2 ){
				if(gameBoard[newY][newX] ==0){

					can = true;

				}
			}
			if (gameBoard[oldy+1][oldx-1] == 2 && oldx ==newx+2 ){
				if(gameBoard[newY][newX] ==0){

					can = true;

				}
			}

		}else{

			can = false;

		

		}

	}else if (playerTurn == 2){

		if (oldy == newy+2 &&(oldx == newx+2 || oldx == newx-2)){
			
			if (gameBoard[oldy-1][oldx+1] == 1 && oldx ==newx-2 ){
				if(gameBoard[newY][newX] ==0){

					can = true;

				}
			}
			if (gameBoard[oldy-1][oldx-1] == 1 && oldx ==newx+2 ){
				if(gameBoard[newY][newX] ==0){

					can = true;

				}
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

// This function varifies if the player wins

function isWinner(){
	var count = 0;
	var winner =false;
	for(k = 0; k<10; k++){
		for(l=0; l< 10; l++){
			if(playerTurn == 1){
				if (gameBoard[k][l] ==2){
					count++
				}
			}else{
				if (gameBoard[k][l] ==1){
					count++
				}
			}
			
		}
		
	}
	if (count == 0){
		winner = true;
	}
	return winner;
}


//this is the function to see multiple jump

function canJumpAgain(y2,x2){
	alert ("in can jump again function"+y+"  "+" "+x);
	var can = false;
	var posx = x2+2;
	var posx1 = x-2;
	var posy = y2+2;
	if (canJump(y2,x2,posy,posx1)){
		alert ("im inside the if statement"+y+"  "+" "+x);
		can = true;
	} else if(canJump(y2,x2,posy,posx1)){
		alert ("im inside the else if statement"+y+"  "+" "+x);
	}
	
	return can;
}

// this function check if the piece become king.


// This function actually play the game

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

			

			jumpPiece(newY,newX,newRow,newCol);
			
			if(isWinner()){
				alert("player "+playerTurn +" wins");
				initialize();
			}else if (canJumpAgain(newY,newX)){
				changeTurn();
			}
			changeTurn();

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




