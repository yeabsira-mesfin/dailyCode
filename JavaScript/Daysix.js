var iniNotNeeded;

let inNeeded = 1;

// const inMust;

// console.log(inMust)
console.log(inNeeded);

let a = 10;

console.log(a - "1");
console.log(a + "1");
console.log(+a + +"1");
console.log(a * "1");
console.log(a % "1");

const fish = ["Starfish", , "Jellyfish"];

console.log(fish);
console.log(fish[1]);

const sales = "Toyota";

function carSales(name) {
  return name === "Honda" ? name : `Sorry we don't sell ${name}`;
}

const car = {
  myCar: "Saturn",
  getCar: carSales("Honda"),
  special: sales,
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);
console.log(carSales("Jaguar"));

const specialObj = {
  obj: { a: "one", b: "two", c: "three" },
  1: "viva",
};
console.log(specialObj.obj.c);
let firstName = "Yeabsira";
let personAge = 25;
let propName = 'greeting'
let obj = {
  [propName]: "name",
  personAge,
};

console.log(obj.greeting);

let stringLiteral = 'vivaronaldo'.length

console.log(stringLiteral)

function tagFunction(strings, ...values) {
    console.log(strings); // Array of string literals
    console.log(values);   // Array of interpolated values
    return "Processed result"; // Custom return
}

const name = "";
const age = 25;

const result = tagFunction`Hello, my name is ${name} and I am ${age} years old.`;
console.log(result);  // Output: "Processed result"


