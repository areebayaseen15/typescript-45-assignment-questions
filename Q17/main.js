"use strict";
/* Qno17 ;
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
//print message
console.log("Sorry, new dinner table won't arrive in time, therefore, we can invite only two guests for dinner.");
let guestList = ["Alveena", "Api", "Ayesha",];
guestList.unshift("Fariya", "Rimsha");
// console.log("updated list of guests is", guestList );
// Remove guests from list
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`Sorry! ${removeGuest}, We can't invite you for dinner`);
    }
}
// print message to guest who are still invited
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You are still invited to dinner.`);
});
// Remove the last two names from your list.
guestList.splice(0, guestList.length);
// print empty list
console.log("Updated guestlist is:", guestList);
