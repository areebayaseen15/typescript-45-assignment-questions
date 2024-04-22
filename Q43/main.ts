// Qno 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged, return 
//  the new array and store it in a separate array. Call show_magicians() with each array to show that you
//   have one array of the original names and one array with the Great added to each magician’s name


  
let magicianss: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicianss: string[]) {
  magicianss.forEach((magician) => {
    console.log(magician);
  });
}
function make_great(magicians : string[]) :string [] {
    return magicianss.map((magician) => `the great!! ${magician}.`);
}
//Create a copy of the original array
const originalMagicians = [...magicianss];

// Modify the copy of the array
const greatMagicians = make_great([...magicianss]);

// Show the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Show the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);