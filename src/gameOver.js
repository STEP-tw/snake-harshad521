const isInRange = function(lowerLimit,upperLimit,number){
  return number>lowerLimit&&number<upperLimit;
};

const isGameOver = function(position){
  let condition1= !isInRange(-1,120,position.x);
  let condition2= !isInRange(-1,60,position.y);
  return condition1 || condition2;
};

const alertGameOver = function() {
  displayGameOver();
  activateButton();
  killSnake();
}

const displayGameOver = function functionName() {
  let scoreBoard = document.getElementById('_scoreBoard');
  scoreBoard.innerText=`Game Over!`
}

const activateButton = function() {
  let restart = document.getElementById('restart');
  restart.style.visibility="visible";
  restart.onclick=function(){location.reload();};
}

const killSnake = function() {
  snake.body = [];
  snake.head = {};
}

const hasSnakeEatenItself = function functionName(head) {
  return snake.body.some(function(bodyPart){
    let condition1 = bodyPart.x == head.x;
    let condition2 = bodyPart.y == head.y;
    return condition1 && condition2;
  });
}
