// Author: Bianca Burciaga
let y = 2003;
console.log("The value of y is "+ y);

let a = (y % 19);
console.log("The value of a is "+ a);

let b = Math.floor(y/100);
console.log("The value of b is "+ b);

let c = (y % 100);
console.log("The value of c is "+ c);

let d = Math.floor(b / 4);
console.log("The value of d is "+ d);

let e = (b % 4);
console.log("The value of e is "+ e);

let f = Math.floor((b+8)/ 25);
console.log("The value of f is "+ f);

let g = Math.floor((b - f +1 ) / 3);
console.log("The value of g is "+ g);

let h = ((19 * a + b - d - g + 15 ) % 30);
console.log("The value of h is "+ h);

let i = Math.floor(c / 4);
console.log("The value of i is "+ i);

let k = (c % 4);
console.log("The value of k is "+ k);

let r = ((32 + 2 * e + 2 * i - h - k ) % 7);
console.log("The value of r is "+ r);

let m = Math.floor((a + 11 * h + 22 * r) /451);
console.log("The value of m is "+ m);

let n = Math.floor((h + r - 7 * m + 114) / 31);
console.log("The value of n is "+ n);

let p = (h + r - 7 * m + 114) % 31;
console.log("The value of p is "+ p);

console.log("In " + y + ", Easter falls on " + n + " / " + (p+1));
