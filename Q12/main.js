"use strict";
/* Qno12: Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.*/
let friends = ["Areej", "Alveena", "Rimsha", "Fariya"];
for (let name of friends) {
    console.log(`Hello ${name}, Would you like to join me on dinner today?`);
}
