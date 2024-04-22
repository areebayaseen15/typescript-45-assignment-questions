/*Qno22;
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

// Define an array
let siblings: string[] = ["Ayesha", "Areeba", "Huzaifa"];

// Try to access an element at an index that is out of bounds
console.log(siblings[3]); // This will produce an index error because the array only has elements at indices 0, 1, and 2

console.log(siblings[2]); // Accessing the last element of the array

console.log(siblings[1]); // Accessing the middle element of the array

console.log(siblings[0]); // Accessing the first element of the array
