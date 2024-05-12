// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestlist = ["Adil", "Aqib", "Kashif", "Usama"];
var Guest1 = guestlist[0];
guestlist.splice(0, 1, "Hyder");
console.log("We have found a bigger Dinner Table for Respectable Guests");
guestlist.unshift("Younus");
guestlist.push("Fahad");
var middleGuest = Math.floor(guestlist.length / 2);
guestlist.splice(middleGuest, 0, "Mumtaz");
console.log("Our new Guests are updated list");
console.log(Guest1, "can not come to Dinner today.");
guestlist.forEach(function (guests) { return console.log("Hi ".concat(guests, ", would like to Dinner with me?")); });
