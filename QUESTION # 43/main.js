// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//Define a Function to console magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define a Function to console magician names wth "The great"
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
//Define an Array to console magician names
var magician_Names = ["Muzammil", "Raju", "Zia", "Razak"];
var copy_magician_names = magician_Names.slice();
var copy_great_magicians = make_great(copy_magician_names);
console.log("Orginal Array\n");
show_magicians(magician_Names);
console.log("Coppied Array\n");
show_magicians(copy_great_magicians);
