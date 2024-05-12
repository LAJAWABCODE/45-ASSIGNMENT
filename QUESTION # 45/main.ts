// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.



//Define Fucntion create a Car Object.

function cars (manufacturer:string, model:string, ...options ){
    let car = {
        manufacturer : manufacturer, 
        model:model,
    };
    options.forEach(option=>{
        let [key, value] = option.split(":")
        car[key.trim()]=value.trim()
    })
    return car
}

let my_Car = cars("Civic", "RS","Color:Black","Sunroof:True","Year: 2024");
console.log(my_Car);


