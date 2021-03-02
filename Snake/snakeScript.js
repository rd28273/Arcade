// Some simple variables for the snake position, velocity, and size    
var snakeX = 135;
var snakeY = 60;
var lastPart = [];
var snakeWidth = 5;
var amountOfParts = 1;
var snakeHeight = 5;
var snakeX_V = 0;
var snakeY_V = 0;
var snakeLength = 1;
var paused = false;
var pausedXHolder = 0;
var pausedYHolder = 0;
var appleX = 0;
var appleY = 0;
var snakepartdelay = amountOfParts;
var appleWidth = 5;
var appleHeight = 5;
var newApple = false;
var appleChangeX = 0;
var appleChangeY = 0;
var gameStart = true;

// All of the direction variables
var up = false;
var down = false;
var left = false;
var right = false;
var snakeTrail = [];
// Random things. 

//THEY ARE NOT RANDOM THEY HAVE A PURPOSE CARTER!!!!!! i am sorry varibles carter is bein gvery mean to you. 

//Sorry Everett, they had a long conversation with me. 

//you should be sorry D:<
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
renderApple();
document.addEventListener("keyup", keyup);
document.addEventListener("keydown", keydown);
setInterval(loop, 100);
setInterval(clearSnake, 100);
setInterval(keyCheck, 1);
setInterval(pauseFunction, 1);

function draw(){
}

function pauseFunction() {
  if (paused) {
    pausedXHolder = snakeX_V;
    pausedYHolder = snakeY_V;
    snakeX_V = 0;
    snakeY_V = 0;
    while (paused) {
      snakeX_V = 0;
      snakeY_V = 0;
      ctx.fillStyle = 'green';
      ctx.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);
    }
  }
}

//Pauses the game
//does not work yet. I can tell
function pause(){
  if(paused == false){
    paused = true;
    snakeX_V = 0;
    snakeY_V = 0;
    pauseFunction();
    
  }
  
  if(paused == true){
    paused = false;
    snakeX_V = pausedXHolder;
    snakeY_V = pausedYHolder;
  }
}

function createMoreSnake(){
  if(snakeLength != 0){

  }
}
// This function makes an apple that the snake can eat.
function renderApple(){
  ctx.fillStyle = 'red';
  appleX = Math.floor(Math.random() * 200);
  appleY = Math.floor(Math.random() * 140);
  if (appleX % 5 != 0) {
    appleChangeX = appleX % 5;
    appleX -= appleChangeX;
  }
  if (appleY % 5 != 0) {
    appleChangeY = appleY % 5;
    appleY -= appleChangeY;
  }
  ctx.fillRect(appleX, appleY, appleWidth, appleHeight);
}

// These functions draw the snake and draw the canvas 
function renderSnake(){
  ctx.fillStyle = 'green';
  ctx.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);
}

function renderCanvas(){
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 1500, 600);
}

// These functions help detect the key presses and change according variables
function keydown(e) {
  if (e.keyCode == 37){
    if(snakeX_V != 5){
      if (snakeX % 5 == 0 && snakeY % 5 == 0)  
        left = true; 
        gameStart = false;
  }
  }
  if (e.keyCode == 38){
    if(snakeY_V != 5){
      if (snakeX% 5 == 0 && snakeY % 5 == 0)  
        up = true;
        gameStart = false;
    
  }
  }
  if (e.keyCode == 39){
    if(snakeX_V != -5){
      if (snakeX % 5 == 0 && snakeY % 5 == 0)
        right=true;
        gameStart = false;
     }
  }
  if (e.keyCode == 40){
    if(snakeY_V != -5){
      if (snakeX % 5 == 0 && snakeY % 5 == 0)
      down = true;
      gameStart = false;
    }
  }
}

function keyup(e) {
  if (e.keyCode == 37){
    left = false;    
  }
  if (e.keyCode == 38){
    up = false;
  }
  if (e.keyCode == 39){
    right = false;
  }
  if (e.keyCode == 40){
    down = false;
  }
}

function keyCheck() {
  if (up) {
    snakeY_V = -5;
    snakeX_V = 0;
  }
  if (down) {
    snakeY_V = 5;
    snakeX_V = 0;
  }
  if(left) {
    snakeX_V = -5;
    snakeY_V = 0;
  }
  if(right) {
    snakeX_V = 5;
    snakeY_V = 0;
  }
}

function die(){
  clearScreen();
  snakeX = 0;
  snakeY = 0;
  snakeX_V = 0;
  snakeY_V = 0;
  ctx.clearRect(snakeX, snakeY, snakeWidth, snakeHeight);
  endGame();
}

function snakeLength(){

}

function generateApple() {
  ctx.fillStyle = 'red';
  appleX = Math.floor(Math.random() * 200);
  appleY = Math.floor(Math.random() * 150);
  if (appleX % 5 != 0) {
    appleChangeX = appleX % 5;
    appleX -= appleChangeX;
  }
  if (appleY % 5 != 0) {
    appleChangeY = appleY % 5;
    appleY -= appleChangeY;
  }
  ctx.fillRect(appleX, appleY, appleWidth, appleHeight);
}
function eatApple(){
  if(appleX == snakeX && appleY == snakeY){
    ctx.clearRect(appleX, appleY, 20, 20);
    generateApple();
    newApple = true;  
    amountOfParts+=1;
  }
}

function clearSnake() {
  if (gameStart) {

  }
  else
    ctx.clearRect((snakeX)-snakeX_V, (snakeY)-snakeY_V, snakeWidth, snakeHeight);
}

function isDead() {
  if (snakeX == -5 || snakeX >= 300){
    die();
  }
  if(snakeY == -5 || snakeY >= 160){
    die();
    endGame();
}
}

function clearScreen() {
  ctx.clearRect(0, 0, 500, 700);
}

function endGame() {
  snakeWidth = 0;
  snakeHeight = 0;
  appleWidth = 0;
  appleHeight = 0;
}

// The actual game loop
function loop(){
  //
  ctx.clearRect((snakeX)-snakeX_V, (snakeY)-snakeY_V, snakeWidth, snakeHeight);
  eatApple();  
  snakeX += snakeX_V;
  snakeY += snakeY_V;
  renderSnake();
  eatApple();
  isDead();
  //just for test vvvv still need it tho
  document.getElementById("applex").innerHTML = amountOfParts;

  //end of test stuff ^^^
}

