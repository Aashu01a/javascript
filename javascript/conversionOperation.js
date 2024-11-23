let score = "20s"

// const {score} = req.body

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);
//20 => 20 
//20s => NaN aka not a number
//true => 1
//false => 0


let isLoggedIn = 1
let booleanisLoogedIn = Boolean(isLoggedIn)
console.log(booleanisLoogedIn);

//1 => true ; 0=> false
// "" => false 
// jeanne => true


let someNumber = 22

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
