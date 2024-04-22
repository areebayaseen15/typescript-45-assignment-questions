/* Qno26:
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

    let aliennColor = "green";

// Version that runs the if block:
    if ( aliennColor == "green") {
        console.log("You 've just earned 5 points for shooting the alien!!");
    }else {
        console.log("You have just earned 10 points!!");
        
    }

    
// Version that runs the else block:
 aliennColor = "yellow";
if (aliennColor== "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

