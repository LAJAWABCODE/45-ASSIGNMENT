// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guestList = ["ADIL", "OWAIS", "BILAL","ZIA"];
let guest1 = guestList[0];
console.log(guest1, "can not come to dinner today.");
guestList.splice(0,1,"Hyder");
guestList.forEach(guests =>console.log(`Hi ${guests}, would you like to dinner today?`))