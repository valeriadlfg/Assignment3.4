function addNumbers(a, b) {
    return a + b;
}

let num1 = 10;
let num2 = 15;
let sumResult = addNumbers(num1, num2);
console.log("Sum:", sumResult);

////

function findMaxNumber(numbers) {
    return Math.max(...numbers);
}

let numbersArray = [505, 200, 101, 8, 9];
let maxNumber = findMaxNumber(numbersArray);
console.log("Max Number:", maxNumber);

////

function concatenateStrings(str1, str2) {
    return str1 + " " + str2;
}

let firstString = "Hey this is";
let secondString = "Val!";
let combinedString = concatenateStrings(firstString, secondString);
console.log("Combined String:", combinedString);


////

let myObject = {
    sumResult: addNumbers(10, 15),
    combinedString: concatenateStrings("Hey this is", "Val!"),
    maxNumber: findMaxNumber([505, 200, 101, 8, 9])
};

console.log("Object:", myObject);
console.log("Sum Result:", myObject.sumResult);
console.log("Combined String:", myObject.combinedString);
console.log("Max Number:", myObject.maxNumber);

////

let myself = {
    name: "Valeria",
    age: 23,
    city: "Austin",
    
};

console.log("myself:", myself);
console.log("Name:", myself.name);
console.log("Age:", myself.age);
console.log("City:", myself.city);

////



