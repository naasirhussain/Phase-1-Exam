// 1. Console.log

console.log("Hello,World!");  // Hello World
console.log(5 + 5);           // 10
console.log(true);            // true


// 2. Comments

// This is Naasir Hussain
/*
This is Naasir Hussian
From Hyderabad
*/


// 3.Variables

let x = 10;
let y = "hello"
console.log(x, y);  // 10 hello

let a =10
let b = 20
console.log(a +b ); // 30

var c = false;
const d = 2;
console.log(c + d);  // 2


// 4. Scoping and variables

function test(){
    let a1 =5;
    const b1 =10;
    console.log(a1, b1);   // 5, 10
}
test()


function test1 (){
    var c1 = true;
    let d1 = true;
    console.log(c1 + d1);  //  2
}
test1()


//5.Data Types in JS

let a2 = 123;
console.log(a2, typeof a2);   // 123 number

let b2 = true;
console.log(b2, typeof b2);   // true boolean

let c3 = "text";
console.log(c3, typeof c3);  // text string



// 6. Operators

let sum = 5 + 3;
console.log(sum);   // 8

let isEqual = 5 === 5;  // true ( checks value only)
console.log(isEqual);

let isEqually = 5 === "5";
console.log(isEqually);  // False ( checks value & operator)



// 7. Conditional statements

let a3 = 8;
if (a3 < 10){
    console.log("right");
} else {
    console.log("wrong");     // Right
}

let marks = 80;
if (marks > 90){
    console.log("Garde A");
} else if (marks = 80){
    console.log("Grade B");   // Grade B
}else{
    console.log("Fail");
}


let College = "MCET";
if (College == "MCET"){
    console.log("Admission");  // Admission
}else{
    console.log("No Collge");
}


// 8.Loops

for (let i =1; i<5; i++)
{
    console.log(i);    // 1, 2, 3, 4
}


for (let j=1; j<=5; j++)
{
    console.log(`5 x ${j} = ${j* 5}`);  // 5x1=5, --- 5x5=25
}


let x1= 1;
while(x1 <10)
{
    console.log(x1);   // 1, 2, -----, 9
    x1++;   
}

let x2 =1;
while(x2<=10)
{
    console.log(`3 x ${x2} = ${x2*3}`);   // 3table
    x2++
}

let y1 =1;
do{
    console.log(y1);
    y1++;
}
while(y1 < 10)  // 1, 2, ---- 9


let y2 =5;
do{
    console.log(`3 x ${y2} = ${y2 *3}`);
    y2++
}
while(y2<=10);  // 3x5=15, ----, 3x10=30




// 9. Break, continue, switch

// continue

for (let l =0; l<=5; l++){
    if (l === 5){
        continue;
    }
    console.log(l);   //  0 1 2 3 4
}


for (let h=1; h<=3; h++){
    if (h === 5){
        continue
    }
    console.log(h);   // 1 2 3 
}


let cars = "BMW";
switch(cars){
    case 1 : 
        console.log("Buy Audi");
        break;
    case 2 : 
        console.log("Buy BMW");
        break;
    case 3 : 
        console.log("Buy Benz");
        break;
        default:
        console.log("There is No car");
}





