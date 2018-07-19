// Examples:
// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat"

function makeAbba(a, b) {

console.log(a + b + b + a);
}
console.log(makeAbba("hi, yo"));

function comboString(a, b){
  if(comboString(a.length > b.length)){
    return b + a + b;
  }
  return a + b + a;
}
console.log(comboString("wow", "sheesh"));

function lastTwo(str){
  return str.substring(0, str.length) - 2 + str.charAt(a.length - 1) + str.charAt(str.length - 2);
}
