"use strict";
// Qno15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else 
//to invite.
let guests = ["Phopho", "Api", "Ayesha"];
let unableToAttends = "Phopho";
console.log(`${unableToAttends}, can't make it to dinner.`);
// replacing the guest
let newGuest = "Alveena";
guests[guests.indexOf(unableToAttends)] = newGuest;
// New invitations
guests.forEach(guests => {
    console.log(`Dear ${guests} ,would you like to join me for dinner?`);
});
//                             "OR"
//  we can also solve this question like this
let guestsList = ["Phopho", "Api", "Ayesha"]; //GUESTLIST
let unableToAttend = guestsList.splice(0, 1)[0]; //guest unable to come
console.log(`${unableToAttend}, can't make it to dinner.`);
//add new guest 
guestsList.push("Areeba quraishi");
// console.log(guestsList)
// print message foe each
guestsList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
});
