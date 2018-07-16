// Author: FirstName LastName
let readline = require("readline-sync");
console.log();
console.log("*****************************************************************");
console.log("                 WELCOME TO THE SF MOMA GAME!");
console.log("                 A game by Bianca Burciaga ");
console.log("*****************************************************************");
console.log("You enter the museum and are deciding what floor to start with");
console.log("A) 6");
console.log("B) 5 ");
console.log("C) None. Why would I want to go to a museum ");
let answer = readline.question("Enter your answer here: ");
if(answer === "a"){
  console.log("Cool, you find German art before 1960 and actually learn for once in your life...finally ");

}else if( answer === "b"){
  console.log("Sheesh you found the room with giant spiders and got so scared you peed and stayed frozen in place and got so emberassed you cried all the way home :) ");

} else if(answer === "c"){
  console.log("Welp... um thanks for playing? Have fun with your life.");
}
if ( answer === "a"){
  console.log("You decide that you actually like learning and you continue walking through the museum. You walk downstair and continue looking around. You realize the room with giant spiders is right in front of you.     What do you do?");
  console.log("A) You go inside and destroy all of them");
  console.log("B) Um...be like any other person and just admire the art ");
  console.log("C) You skrrrt around and pretend it doesn't exist.");
  answer =  readline.question("Enter your answer here: ");
  if(answer === "a"){
    console.log("Well congrats you owe millions of dollars for destroying the art. Are you happy with yourself?");
  }else if( answer === "b"){
    console.log("Your so basic like you don't even get to finish this game gurl bye next time be more creative and you'll actualy get somewhere in life");
  }else if(answer === "c"){
    console.log("Honeslty same, but anyway enough about mee. You come across the room with pretty lights what do you do?");
    console.log("A) Take a selfie duhhh");
    console.log("B) Take a picture of Julio making a weird face by the lights ");
    console.log("C) Walk past them mugging the people who kept hogging it and didn't give you a chance to take a picture");
    answer = readline.question("Enter your answer here: ")
    if(answer === "a"){
      console.log("Nice job...you cracked your screen :)");
    } else if(answer === "b"){
      console.log("...your weird go home");
    }else if(answer === "c"){
      console.log("You go home feeling salty that you didn't get the chance to take a picture. Have fun with your life :)");
    }
  }
}
console.log("Thanks for playing!");
console.log("*****************************************************************");
