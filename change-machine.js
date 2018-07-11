// Author: Bianca Burciaga

console.log("bLeep blOop! i'm a CHanGE macHINe!");

let readline = require('readline-sync');

console.log("************************************************************");

let cents = Number(readline.question('Please enter cents as a positive integer: '));

let quarters  = Math.floor(cents/25);
console.log("Quarters = " + quarters) ;
cents = cents % 25;
let dimes = Math.floor(cents / 10 );
console.log("Dimes = " + dimes);
cents = cents % 10;
let nickles = Math.floor(cents / 5);
console.log("Nickels = " + nickles);
cents = cents % 5;
let pennies = Math.floor(cents);
console.log("Pennies = " + pennies);

console.log("************************************************************");

console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");
