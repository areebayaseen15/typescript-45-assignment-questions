"use strict";
/* Qno18
Seeing the World: Think of at least five places in the world you’d like to visit.*/
let places = ["Makkah", "Madina", "Turkey", "Jeruselum", "Gaza"];
// Print your array in its original order.
console.group("Original order:", places);
//  Print your array in alphabetical order without modifying the actual list.
console.group("Alphabetical order:", [...places].sort());
// Print your array in its original order.
console.group("Original order still:", places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.group("Reverse Alphabetical order:", [...places].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.group("Original order still:", places);
// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("reverse order:", places);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.group("Original order after reversing again:", places);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.group("Alphabetical order", places);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort().reverse();
console.log("Reverse Alphabatical Order:", places);
