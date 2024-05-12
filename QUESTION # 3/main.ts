// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName: string = "MUZAMMIL";
console.log("Lower Case =", personName.toLowerCase());
console.log("Upper Case =", personName.toUpperCase());
console.log(  "Title Case =",
  personName.replace(/\b\w/g, (chase) => chase.toUpperCase()));
