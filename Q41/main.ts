// Qn0 41:
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.


let magicians  = ["Zakota" , "Alexender" , "Chaless"];

function show_magicians(magicians : string[]) {
    magicians.forEach(magician => {
        console.log(magician);
        
    });
}
show_magicians(magicians);

    