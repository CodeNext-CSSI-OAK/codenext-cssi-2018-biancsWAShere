let readline = require("readline-sync");
let ourNum = 5;
let userNum = Number(readline.question ("please guess a number from 1 to 10: ") );
let isItHot = readline.question("Is it hot outside?");
if (userNum === ourNum){
  console.log("You guessed it! Lucky!");
  if (isItHot === "yes"){
    console.log("Good thing yout brain is working in the heat")
  }
} else if(userNum > ourNum) {
  console.log("You guessed too high:(")
} else{
console.log("You guessed too low :(")}
}
