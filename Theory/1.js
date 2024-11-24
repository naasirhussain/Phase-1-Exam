// 1. Console.log

// Console.log is used to print 

console.log("Hello cfi");  // Hello cfi

console.log(20);  // 20



//2. Comments 

// The comment is used to write something in which
// the code will not run.

/* This is Multi line comment
hello cfi */

// No Out put for Comment



// 3. Variables
// In programming variable is a container(storage area) to hold the data

var name1 = "mohammad";
console.log(name1);   // mohammad

let name2 = "naasir";
console.log(name2);    // naasir

const name3 = "hussain";
console.log(name3);     // hussain



// 4. Scoping and Variables

// scoping in java script
/*
three types of scoping in js
1. block scope
2. function scope
3.global scope
*/

// Block scope                  var        let       const       
// Inside of block              ✅         ✅        
// outiside of block            ✅         ❌       


// 1. var
// inside of block
{
    var a = 10;
    var b = 20;
    console.log(a,b);  /// 10, 20
}
// outside of block

{
    var a = 30;
    var b = 40;
}
console.log(a + b); // 70


//2. let
// insoide of block

{
    let a1  = 10;
    let a2 = 20;
    console.log( a2 -a1);  // 10
}
// outside of block
{
    let b1 = 20;
    let b2 = 30;
}
console.log(a3, a4); //    error

//3. Const
// Inside  // Outside



// 5. Data Types in JS

// Data types in java scipt.

/*
A. primitive date type
--> It can store single type of data.
1. string ==> textaul data ==> "hello iam naasir and age 22" or 'heelo iam naasir; (inverted commas)
2. number ==> Integer or decimal ==> 4 or 24.43 ( No inverted commas)
3. boolean ==> Any 2 values it can true or false.   ===> (but "True or False") in commas is string.
4. null ==> denotes to empty value.
5. undefined ==>A data type whose variable is not defined.


B. Non primitive data type.
--> it can store multiple data types
1. objects ===> are key value pair of connections of data
2. Arrays ===> It enables storing a collection of multiple items under a single name 
*/


// example of object

let person = {
    fisrtName: "naasir",
    age: 22,
    phone: "8479874897",
    isAlive: true,
    aadhar: 7398578705837,
    text: null,
    sleep: undefined,
};
console.log(person);                            // print all details
console.log(person.fisrtName, person.age);      // prints only name & age.



// Example of Arrays

let cfiStudents24 = ["naasir", "saad", 34, 54, 38, null, undefined, true];
//                      0        1      2   3   4    5       6        7
console.log(cfiStudents24);
// it prints all naasir --------------true.
console.log(cfiStudents24[2], cfiStudents24[5]);
// prints 34 null


// 6. Type Conversions
/* 
The process of converting data of one type to another type is called TC

There are two type of conversions in JS

1. Implicit conversions
2. Explicit conversions

*/

let school;
school = Number("30");  // 30 number
school = Number(30); // 30 number
school = Number (true);  // 1 number
school = Number (false);  // o number
school = Number ("hello"); // NaN number
school = Number ('null'); // Nan number 
school = Number('undefined');  // NaN number
console.log(school, typeof school);



// 7. Operators

// Symbols or Keywords thta are used to perform operations on values are clled Operators

  
console.log(typeof "hello");  // string
console.log(typeof 24);       // number
console.log(typeof true);     // boolean
console.log(typeof false);    // boolean
console.log(typeof {});       // object 
console.log(typeof []);       // It is array but by default is JS it id an object
console.log(typeof null);     // ( Bug ) the data type it is object
console.log(typeof undefined);  // undefined



