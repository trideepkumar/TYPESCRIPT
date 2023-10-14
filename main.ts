export {}

let message = "Just changed!!!...."

console.log(message)

// Variable declaration

// Use 'let' if the value changes over time
// Use 'const' if the value doesn't change

let x: number = 10;
const y: number = 30;

let sum: number;
// 'sum' may vary over time

const title: string = "Typescript";
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

let firstName = 'sadhhfdo'

console.log(typeof firstName)

// boolean , number ,string 

let isBoolean: boolean = true;
let total :number = 30
let name : string = 'Trideep'



let sentence : string = `My name is ${name},I'm a fullStak developer`

console.log(sentence)



// In the ts file the intellisense is very accurate , because it will show only the 
// appropriate one for the particular types




//NULL & UNDEFINED

// In Typescript the null and undefined are classified as the subtypes of 
// the other variable types.

let n : null = null
let m : undefined = undefined

// let isNew :boolean = null
// let newString :string = undefined

let isNew: boolean | null = null;
let newString: string | undefined = undefined;

console.log(isNew,newString)

//ARRAY

// for the array declaration we can declare in two ways 

let list1 : number[] = [2,3,45,56]
let list2 : Array<number> = [23,4,5,6,34,45]

console.log(list1)
console.log(list2)


//Tuples in Ts

// In typescript tuple type is the specific datatype that allows the data to store in any
// array of different types in the same order 

// The order cannot be changed ,otherwise it will show error

let person1:[string ,number,boolean] = ['trideep',23,true]

console.log(person1)


//Enums

// An enum is a special "class" that represents a group of constants (unchangeable variables).


enum Color {Red,Green=10,Blue}

let c : Color = Color.Blue

console.log(c)


//any Type in typescript

let randomValue :any = 19

console.log("type of random value", typeof randomValue)

randomValue = true

randomValue = 'trideep kumar'

console.log(randomValue.toUpperCase())


//unkown type in typescript

// unknown is similar to the any type

let unkownVariable :unknown = 'string'

function hasName(obj:any) : obj is  {name:string} {
    return !!obj &&
    typeof obj === "object" &&
    "name " in obj
}

if(hasName(unkownVariable)){
    console.log(unkownVariable.name)
}

console.log((unkownVariable as string).toUpperCase())


// console.log(unkownVariable)



//Type inference 

let a ;
a = 10
a = 'str'

// (This is infer) Inference in Typescript

let b = 10  

// b = 'ster'


let multitype : number | boolean 

multitype = 20
multitype = true

console.log(multitype)

let anyType : any
 anyType = 10
 anyType= true
 anyType='trideep'

 console.log(anyType)


 //functions in typescript

//  functions with normal parameters

 function add(num1 : number,num2?:number):number{
    return num1+(num2||0)
 }

 console.log(add(5,5)) 
  //if we add a number to the string type it will output the concat value


 //functions with optional parameters

 function adds(a:number,b?:number):number{
    if(b){
        return a+b
    }else{
        return a
    }
 }

 console.log(adds(10,10))

//  functions with default parameters 

 function multiples(a:number,b:number=10):number{
    return a*b
 }
 
 console.log(multiples(5))

 //named parameters

 function divide({dividend,divisor}:{dividend:number,divisor:number}){
    return dividend/divisor
 }

 console.log(divide({dividend:10,divisor:5}))


 //Interfaces in typescript

 interface Person{
    fName:string,
    lName?:string
 }
 
 function fullName(person:Person){
   return person.fName+person.lName
 }

 let p ={
    fName:'bob',
    lName:'marley'
 }

 console.log(fullName(p))

