"use strict";
/* Qno24:
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:*/
// • Tests for equality and inequality with strings
console.log("equality and inequality with strings");
let string1 = "hello";
let string2 = "world";
//  Equality
console.log(string1 == string2); //False
//  Inequality
console.log(string1 != string2); // True
// • Tests using the lower case function
let string = "HELLO";
let string4 = "hello";
//  Lower case comparison
console.log("Testing Lower case ");
console.log(string.toLowerCase() == string4.toLowerCase()); // True
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests");
console.log(10 > 9); //true
console.log(2 < 1); //false
// • Tests using "and" and "or" operators
console.log("Test with and and or operators:");
let condition1 = true;
let condition2 = false;
// and operator
console.log(condition1 && condition2); // False
// or operator
console.log(condition1 || condition2); // True
// • Test whether an item is in a array
console.log("Test whether an item is in a array");
let array = [1, 2, 3, 4, 5];
//  Item in array
console.log(3 in array); // True
// Item not in array
console.log(6 in array); // False
// • Test whether an item is not in a array
console.log("Test whether an item is not in a array");
let counting = [5, 6, 7, 8, 9];
// Item not in array
console.log("Is number not in array?"); //True
console.log((2 in array));
// Item in array
console.log(7 in counting); // False
