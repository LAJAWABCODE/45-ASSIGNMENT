// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.



// Variable
let alienColor = "Green";
// 1st Test 
if (alienColor === "Green") {
    console.log("(1st Test)You shot down green Alien you have earned 5 points.")
} else if (alienColor === "Yellow") {
    console.log("(You shot down Yellow Alien you have earned 10 points");
} else if (alienColor === "Red") {
    console.log("You shot down Red Alien you have earned 15 points");
}
//2nd Test 
let alienColor2 = "Yellow"
if (alienColor2 === "Green"){
    console.log("You shot down Green Alien you have earned 5 points");
}else if (alienColor2 === "Yellow"){
    console.log("(2nd Test)You shot down Yellow Alien you have earned 10 point");
}else if (alienColor2 === "Red"){
    console.log("You shot down Red Alien you have earned 15 points");
}

//3rd Test
let alienColor3 = "Red";
if(alienColor3 === "Green"){
console.log("You Green show down Green Alien you have earned 5 points");
}else if (alienColor3 === "Yellow"){
    console.log("You shot down Yellow Alien you have earned 10 points");
}else if (alienColor3 === "Red"){
    console.log("(3rd Test) You show down Red Allien you have earned 15 points");
}