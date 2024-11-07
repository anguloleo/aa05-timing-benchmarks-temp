const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
    let arr = [];
    let maxNum = increment * 10;
    for(let i = increment; i <= maxNum; i +=increment){ 
      //console.time("addNums");
      arr.push(addNums(i));
      //console.timeLog("addNums");
      //console.timeEnd("addNums");
    }
    return arr;
  }

function addManyNums10Timing(increment) {
    let arr = [];
    let maxNum = increment * 10;
    for(let i = increment; i <= maxNum; i += increment){
      arr.push(addManyNums(i));
    }
    return arr;
  }





n = 1000000
console.log(`addNums(${n}): `);
startTime = Date.now();
addNums10Timing(1000000);
endTime = Date.now();
console.log(`${endTime - startTime} ms`);

console.log("\n***********\n");

n = 1000
startTime = Date.now();
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
endTime = Date.now();
console.log(`${endTime - startTime} ms`);
