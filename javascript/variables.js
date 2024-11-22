const accountId = 1444
let accountEmail = "jeanne@12.com"
var accountPassword = "123"
accountCity ="blr"
let accountState;

// accountId = 2 //not allowed


/*lets not use var we will learn why not to use later when we will come to learn about 
block scope and unctional scope but for now var has error on block scope and functional scope*/


accountEmail = "jeanneis12@gmail.com"
accountPassword = "heyu"
accountCity = "kashmir"
 console.log(accountId);
console.table([accountEmail , accountId , accountPassword, accountCity , accountState]);
/*account state will be undefined bc we had not defined it yet*/

