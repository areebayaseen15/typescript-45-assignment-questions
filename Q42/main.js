"use strict";
// Qno42:
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map((magician) => `the great!! ${magician}.`);
}
// Modifiy the array of magicians
magicians = make_great(magicians);
//   call show magicians to see the modified list
show_magicians(magicians);
