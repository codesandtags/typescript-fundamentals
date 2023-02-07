// Type Annotations

// Primitives
const apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;
let nothing: null = null;
let empty: undefined = undefined;

// Objects
let now: Date = new Date();

// Arrays
const colors: string[] = ["green", "blue", "red"];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 20,
  y: 40,
};

// Function
const logNumber: (n: number) => void = (n: number) => {
  console.log(n);
};

// Type inference only works when declaration and initialization are on the same line
let oranges = 5; //number

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initalizate it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
