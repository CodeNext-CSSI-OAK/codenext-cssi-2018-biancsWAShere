// Author: FirstName LastName
let readline = require("readline-sync");
console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
console.log("Guess what? A vampire shows up what do you do? ");
console.log("A) Kiss it...");
console.log("B) Kill it. ");
console.log("C) Nothing. ");
let answer = readline.question("Enter your answer here: ");
if(answer === "a"){
  console.log("Congratulations you married the vampire, and once you turned 80 it ate you and moved on.");

}else if( answer === "b"){
  console.log("You are a cruel but smart human being so congrats you get to move forward in the haunted house :)");

} else if(answer === "c"){
  console.log("You stared at eachother for a while and had a mini starig contest. The vampire lost, got salty and ate you.");
}
if ( answer === "b"){
  console.log("You continue walking around the haunted house you get jump scared blah blah blah lets skip to the interesting part. You find a magical being with a bunch of powers what do you do? ");
  console.log("A) You attack");
  console.log("B) You tell a magical joke");
  console.log("C) You become friends");
  answer =  readline.question("Enter your answer here: ");
  if(answer === "a"){
    console.log(" You try getting close to him to attack but he snapped his fingers and you turned into dust and faded away and your last words were...Mr.Stark no I don't wanna go I'm sorry...");
  }else if( answer === "b"){
    console.log("the magical being got offended and brought the vampire back to life so it can kill you :)");
  }else if(answer === "c"){
    console.log("Congrats my dude ya'll became besties or whatevaaaa and he helped you for whatever is left in the haunted house");
    console.log("You can basically see the exit at this point but of course something gets in ur way...its your mom she's been wondering where you've been and is pissed you haven't gone home so she takes out the chancla.What do you do?");
    console.log("A) You just accept the chancla and go home");
    console.log("B) You tell the wizard to do something");
    console.log("C) You run away");
    answer = readline.question("Enter your answer here: ")
    if(answer === "a"){
      console.log("Good choice you know it would have been worse if you had done anything else... You go home and hop on fortnite and enjoy the rest of the day :)");
    } else if(answer === "b"){
      console.log("Your mom knocks him out with the chancla before he gets the chance to do anything. Your mom gets mad so she kicks you out the house and forces you to live in the haunted house for the rest of your life...good job -.-");
    }else if(answer === "c"){
      console.log("Your mom gets pissed and makes the magical being turn you into a baby again so she can raise you right this time.");
    }
  }
}
if (answer === "c"){

}
} else {
console.log("Well sucks for you. Good luck with your life. Bye!")
}
console.log("Thanks for playing!");
console.log("*****************************************************************");
