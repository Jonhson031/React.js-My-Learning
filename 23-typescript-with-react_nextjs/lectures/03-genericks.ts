// * Generics
// ? They let you write reusable, type-safe code that works with diffrent types without losing information

// Without Generics:
function anyFunc(value: any) {
  return value;
}

const result = anyFunc("value"); // result becomes any type and loses type-safety

// * With Generics
function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const arrayTest = [2, 55, 1, 4, 2];
const combinedResult = insertAtBeginning(arrayTest, 441); // generics saves type
const stringArray = insertAtBeginning(["test1", "word"], "lorem");
