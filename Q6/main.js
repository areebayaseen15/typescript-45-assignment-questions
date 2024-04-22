"use strict";
// Qno6: Stripping Names: Store a person’s name, and include some whitespace characters at the 
// beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at
//  least once. Print the name once, so the whitespace around the name is displayed. Then print the name 
//  after striping the white spaces.
//example2
let whiteSpace = 'Areeba\tYaseen';
console.log(whiteSpace);
let whiteSpace2 = 'Areeba\nYaseen';
console.log(whiteSpace2);
//Example2
let personName = `\n\t Areeba Yaseen\t\n`;
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
