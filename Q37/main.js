"use strict";
// Qno37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`Making a ${size} T-shirt with the message ${message} printed on it.`);
}
make_shirt(); //default size
make_shirt("medium"); //medium size, default message
make_shirt("small", "Dive into coding"); //custome message small size
