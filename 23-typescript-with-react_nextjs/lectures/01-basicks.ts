// * Base types in TypeScript

// * Basic Types (primitives): string, number, boolean, null, undefined
// * More complex types: arrays, objects
// * Functions types, parameters

// * Primitives:
let age: number;
age = 1;

let username: string = "Maks2006";
username = `Maks${age}`;

let isAdmin: boolean;
isAdmin = true;

// * Complex types:
let hobbies: string[];
hobbies = ["armwrestling", "web development"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Maks",
  age: 20,
};
person.isAdmin = true; // - type error

let people: {
  name: string;
  age: number;
}[];

// * Type Inference
// ? By default TypeScript tries to infere as many types as possible
let course = "React: complete guide"; // - string type
course = 32454; // - type error

// * Using Union Type
// Allows the value to be one of several types
let diffrentType: string | number | boolean;
diffrentType = "fvfv";
diffrentType = true;
diffrentType = 123;

// * Using Type Alias
// Allows us to define your own base type and then reuse it
type DogType = {
  name: string;
  age: number;
};

let dog: DogType;
dog = {
  name: "Nika",
  age: 8,
};

let dogs: DogType[] = [];
dogs.push({
  name: "Dog",
  age: 12,
});
