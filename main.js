"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Just changed!!!....";
console.log(message);
// Variable declaration
// Use 'let' if the value changes over time
// Use 'const' if the value doesn't change
var x = 10;
var y = 30;
var sum;
// 'sum' may vary over time
var title = "Typescript";
// 'title' cannot be changed, so use 'const'
// Variable types
// There are three main primitives in JavaScript and TypeScript.
// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"
// There are also 2 less common primitives used in later versions of Javascript and TypeScript.
// bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
// symbol - are used to create a globally unique identifier.
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit
//implicit 
var firstName = 'sadhhfdo';
console.log(typeof firstName);
// boolean , number ,string 
var isBoolean = true;
var total = 30;
var name = 'Trideep';
var sentence = "My name is ".concat(name, ",I'm a fullStak developer");
console.log(sentence);
// In the ts file the intellisense is very accurate , because it will show only the 
// appropriate one for the particular types
//NULL & UNDEFINED
// In Typescript the null and undefined are classified as the subtypes of 
// the other variable types.
var n = null;
var m = undefined;
// let isNew :boolean = null
// let newString :string = undefined
var isNew = null;
var newString = undefined;
console.log(isNew, newString);
//ARRAY
// for the array declaration we can declare in two ways 
var list1 = [2, 3, 45, 56];
var list2 = [23, 4, 5, 6, 34, 45];
console.log(list1);
console.log(list2);
//Tuples in Ts
// In typescript tuple type is the specific datatype that allows the data to store in any
// array of different types in the same order 
// The order cannot be changed ,otherwise it will show error
var person1 = ['trideep', 23, true];
console.log(person1);
//Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 11] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
//any Type in typescript
var randomValue = 19;
console.log("type of random value", typeof randomValue);
randomValue = true;
randomValue = 'trideep kumar';
console.log(randomValue.toUpperCase());
//unkown type in typescript
// unknown is similar to the any type
var unkownVariable = 'string';
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name " in obj;
}
if (hasName(unkownVariable)) {
    console.log(unkownVariable.name);
}
console.log(unkownVariable.toUpperCase());
// console.log(unkownVariable)
//Type inference 
var a;
a = 10;
a = 'str';
// (This is infer) Inference in Typescript
var b = 10;
// b = 'ster'
var multitype;
multitype = 20;
multitype = true;
console.log(multitype);
var anyType;
anyType = 10;
anyType = true;
anyType = 'trideep';
console.log(anyType);
//functions in typescript
//  functions with normal parameters
function add(num1, num2) {
    return num1 + (num2 || 0);
}
console.log(add(5, 5));
//if we add a number to the string type it will output the concat value
//functions with optional parameters
function adds(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(adds(10, 10));
//  functions with default parameters 
function multiples(a, b) {
    if (b === void 0) { b = 10; }
    return a * b;
}
console.log(multiples(5));
//named parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 5 }));
function fullName(person) {
    return person.fName + person.lName;
}
var p = {
    fName: 'bob',
    lName: 'marley'
};
console.log(fullName(p));
