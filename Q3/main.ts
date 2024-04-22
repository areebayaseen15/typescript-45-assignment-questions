//Qno3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.

let personName: string = "Areeba";

console.log(personName.toLowerCase()); // will show the name in all small letters
console.log(personName.toUpperCase());  // will show the name in all capital letters
console.log(personName.charAt(0).toUpperCase() +
personName.slice(1).toLowerCase());    // will show the name with first letter big

