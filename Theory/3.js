// 11. Hoisting
/*
Hoisting :-  In java script, hoisting is a mechanism where variable and function declaration
are moved (or "hoisted") to the top of their scope before code execution.
this means that you  can use variables and functions before declaring them in the code
*/


sayHello();                       // simple function ( hoisting woeks in onlu simple function)
function sayHello(){
    console.log("hello cfi");    // prints hello cfi
}


// 12. Tempelte Literals

// console.log("Hello");
// --->  ` ` ( if use Tild instead of Doble commas, then we can use different variables)


for (let i=1; i<= 10; i++)
{
    
 console.log(`2 x ${i} = ${i*2}`);  // prints (2x1=2, 2x2=4 ------2x10=20)
}
    
    
for (let g=1; g<=10; g++)
 {
    console.log(`2 x ${g} = ${g*2}`);
        
}



// 13. Recurssion

// In simple terms, recursion is hen somnething is definrd or done in terms of itself until it 
// reaches a stopping point.
// to stop the recursion we need base case, in order to come out the infinite loop



function sum(number){          // simple
    console.log(number - 1);
}sum(10);   // prints 9


function call(num){
    console.log(num);   // by here it prints one time 5
    call(num);          // if we put call inside block it prints many times ( infinite)
}
call(5);



// 14. Functions
/*
Funtions is a block of code which performs specific task

There are two types of functions 
1. Built functions
2. user defined funtions
*/

// Decalring the function

function sayHello() {
    console.log("Hello Everyone");
  }
  sayHello()              // sayHello  is calling he function
                          // prints Hello Everyone
  



// 1. simple functions
// A basic function that perfiorms actions and doesn't return a value

function greet (){                            // simple function -- without parameters
    console.log("Hllo world");
} 
greet();          // prints Hello world        


// 2. functions with parameter

function sayHello(firstName){                 // functions with parameters
        console.log(`Hello ${firstName}`);
}
   sayHello("naasir");      // prints Hello naasir


// 3. Functions with return
   

function sum(num1, num2){
    return num1 + num2;
}
let totalSum = sum(4, 6);
console.log(totalSum);                   // prints  10 ( not undefined)


// 4. function expression

let sayHello1 = function(num1, num2){
    return num1 + num2;
}
let result = sayHello1(10,20);   // till here it is 30
console.log(result * 2);   // by using return it stores up value and ptints  60.


//  5. Arrow Function

let sayHello2 = () =>  {          // arrow function ( we remove function and put =>)
    console.log("Hello cfi");      // prints hello cfi
}
    sayHello2();




// 15. Objects And Methods CURD


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



// 16. Arrays - CURD

// ---> An array is an ordered list of values. these can be any 
// type and an array can store multiple types at once.

let numbers = [ 1, 2, 3, 4, 5, 6, 7];
 //             0  1  2   3  4  5  6

let mixedarray = [1, "Hello", true, {id: 3456}, [12, 13]];
              //  0     1      2        3          4    
// array start with 0th index
 // Acessing elements

 console.log(numbers[2], numbers[4]);
// prints 3  5 

console.log(mixedarray[3]); // gives id: 3456 - if want only 3456 
console.log(mixedarray[3].id); // gives only 3456

console.log(mixedarray[4]);  // prints [ 12,13]
console.log(mixedarray[4][0]); // prints only 12 (giving path 4 & 0)


// modifying elements

numbers[2] = 10;
console.log(numbers); // Replaces the values 3 of index 2 by 10.

mixedarray[1] = "Hi";
console.log(mixedarray);   // modifies Hello with Hi



// Adding Elemnts

let c24Students1 = ["naasir", "ismail","saad","omer"];
//                   0          1        2      3
let c24Students2 = ["hello cfi","true",23, [44, 55], 78 ]
//                     0          1    2       3      4

c24Students1.push("suhail");
console.log(c24Students1);  // by push it adds suhail at END.


c24Students2.unshift("zeeshan");
console.log(c24Students2);    // by unshift it adds zeeshan at START.

// Removing Elements

let c24Students3 = ["naasir", "omer", "ismail"];
let c24Students4 = [123, 234, 345,"hello cfi", [23, 24], "saad", "omer"];

c24Students3.pop("ismail");
console.log(c24Students3); // removed ismail from c24-3 --- no need to give name, 
                            // it directly deltes last name.

c24Students4.shift();
console.log(c24Students4);  // removed 123 from c24-4 --- no need to give name 
                            // it takes deletes first name.
                            



