// 10. Templte Literals

let name = "naasir";
let greeting = `Hello ${name}`;
console.log(greeting);   // Hello naasir




// 11. hoisting

// console.log(a);
// var = 5;              // error

// console.log(b);
// let b = "naasir"      // error

// test();
// let test = () => {
//     console.log("Hello naasir");   // error
// }
 


// 12. Recursion

// function fac(n){
//     if (n <=1){
//         return console.log("nnnnn")
//     }
//     console.log(n);
//     fac(n - 1);
// }
// fac(5);



// 13. Functions

function  add(a,b){
    return a + b;
}
console.log(add(4,5));   // 9


function divide(x,y){
    return x / y;
}
console.log(divide(20, 4));   // 5


const greet = () =>{
    console.log("hello cfi");
}
greet();         // hello cfi



// 14. Default PArameters

function greet1(name = `Guest`) {
    console.log(`${name}`);
} 
greet1();     // Guest


function sum(a, b = 10){
    return a +b;
}
console.log(sum(3,7));   // 10



function Multiple(a,b = a *b){
    return a * b;
}
console.log(Multiple(5, 6));   // 30



// 15. Types Of User-defined functions
// Simple Function

function name3() {
     console.log("hello Mom"); 
}
name3();   // Hello Mom


function SayHello(myName) {
    console.log(`hello, ${myName}`);
}
SayHello("Naasir");   // hello naasir


let cfi = () => {
    console.log("stuedent of cfi");
}
cfi();   // student of cfi



// 16.Objects and methods

let obj  = {
    name: "John",
    age: 50,
}
console.log(obj);  // { name: 'John', age: 50 }
delete obj.name;
console.log(obj);  // { age: 50 }

let details = {
    fname: "naasir",
    age: 22,
    city: "HYd"
}
console.log(details);

details.fname = "Hussain",
console.log(details);  // { fname: 'Hussain', age: 22, city: 'HYd' }

details.isEmployed = true;
console.log(details);
// { fname: 'Hussain', age: 22, city: 'HYd', isEmployed: true }



// 17.  Arrays - CURD


let arr = [ 1, 2, 3];
console.log(arr.push(4)); //  1 2 3 4
console.log(arr);

let abc = ["apple", "ball"]  // [ 'apple', 'ball', 'cat' ]
console.log(abc.push("cat"));
console.log(abc);


let arr1 = [1, "naasir", 3, null, true, false , 35] 
console.log(arr1);    // [ [ 1, 'naasir', 3, null, true, false, 35 ] ]



// 18. Methods - Arry, String, Object

let numbers = [1, 2, 3 ,4, 5];
//   value  -   1  2  3  4  5
//   index  -    0  1  2 3  4
numbers.forEach((x, y) => {
    console.log(x, y);
})


let cfi1 = ["naasir", "ismail", "saad", "omer"]
cfi1.forEach((a, b) => {
    console.log(a, b);
})  
/* naasir 0
ismail 1
saad 2
omer 3  */


// string - split

let park = "tiger.lion.mokey";
console.log(park.split("."));
// [ 'tiger', 'lion', 'mokey' ]

let College = "staff.students.security";
console.log(College.split("."));





