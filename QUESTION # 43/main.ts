// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.





//Define a Function to console magician names

function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

//Define a Function to console magician names wth "The great"
function make_great(magicians: string[]) {
  return magicians.map((name) => `The great ${name}`);
}

//Define an Array to console magician names
let magician_Names = ["Muzammil", "Raju", "Zia", "Razak"];



let copy_magician_names = magician_Names.slice();

let copy_great_magicians = make_great(copy_magician_names);

console.log("Orginal Array\n");
show_magicians(magician_Names);
console.log("Coppied Array\n");
show_magicians(copy_great_magicians);