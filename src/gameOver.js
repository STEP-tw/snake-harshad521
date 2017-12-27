const isInRange = function(lowerLimit,upperLimit,number){
  return number>lowerLimit&&number<upperLimit;
};

const isGameOver = function(position){
  let condition1= !isInRange(-1,120,position.x);
  let condition2= !isInRange(-1,60,position.y);
  return condition1 || condition2;
};
