// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified






//Define a Function to console magician names

function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

//Define a Function to console magician names wth "The great"
function make_great(magicians: string[]) {
  return magicians.map((name) => `The great ${name}`);
}

//Define an Array to console magician names
let magician_Names = ["Temoor", "Hadi", "Rizwan", "Younus mama"];

let great_magicians = make_great(magician_Names);

show_magicians(great_magicians);
