// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["ADIL", "OWAIS", "BILAL", "ZIA"];
var guest1 = guestList[0];
console.log(guest1, "can not come to dinner today.");
guestList.splice(0, 1, "Hyder");
guestList.forEach(function (guests) { return console.log("Hi ".concat(guests, ", would you like to dinner today?")); });
