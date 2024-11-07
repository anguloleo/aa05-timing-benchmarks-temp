const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let arr = [];
  let maxNum = increment * 10;
  for(let i = increment; i <= maxNum; i +=increment){
    arr.push(addNums(i));
  }
  return arr;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let arr = [];
  let maxNum = increment * 10;
  for(let i = increment; i <= maxNum; i += increment){
    arr.push(addManyNums(i));
  }
  return arr;

}


console.log(addNums10(10));
module.exports = [addNums10, addManyNums10];
