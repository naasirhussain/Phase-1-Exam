// Control Flow Statements.


// 8. Conditional statements
/* conditional steatement allow you to execute code based on specific conditions
1. if
2. if else
3. if  esle if  else
4. nested if else
*/

// 1. if 

let cfi = 20;
if (cfi == 20){
    console.log("Accepted"); // Accepted
}


// 2. if esle

let x = 10;

 if (x >=20) {
    console.log("X is is grester thsn 20");
 }else
 {
    console.log('less than 20');
 } // prints less 20.


// 3. else if

let mymarks = 40;

if (mymarks >= 70){
    console.log("grade A")
} else if (mymarks >= 60){
    console.log("grade B");
} else if (mymarks >= 40){
    console.log("grade c")
} else {
    console.log("fail");
}                              // prints ( garde C).

// 4. nested 

let myage = 10;

if (myage >= 18)
{
    console.log("you are an adult");
    if (myage >= 21) {
        console.log('you are eligible');
    } else {
        console.log("but you are not eligilbe")
    }
}
else {
    console.log("you are a minor");
}
 // prints - you are minor




 // 9. Loops
 /*
1. Entry -controlled loops-- The condition is checked [before] the loop body is executed 
Ex- for and while loops
2. Exit-controlled Lopps- The condition is checked [after] the loop body has been executed at least once.
Ex- do...while loop. 
*/

//for loop

for  (let i=0 ; i<5; i++)
{
    console.log(i);        //   prints 0 1 2 3 4
}

// While loop
let g=1;
while (g<=10)
{
    console.log(`7 x ${g} = ${g*7}`);   //prints 7x1=7, 7x2=14 -----7x10=70
    g++;
}


// do while loop


let w=1;
do
{
    console.log(`${w} ^ ${w} = ${w**w}`);
    w++
}
while (w<=5);   /// prints if one *   1x1=1, 2x2=4, 3x3=9, 4x4=16, 5x5=25
            



// 10. Break, Continue, switch

//In Javscript break, continue, and switch are controlled flow statements that help 
// control the execution of loops and conditional stetements.

//break
let tableName = 5;
let start = 1;
let end = 10;

for (start; start <= end; start++) {
  console.log(`${tableName} x ${start} = ${start * tableName}`);
}                 // prints  5x1=5, 5x2=10 -----------5x10=50

// Continue
for ( let r=5; r<=15; r++){
    if( r === 10){
      continue;
    }
    console.log(r);   // 5,6 ----9,11,12 ---15); ( leaves 10)
  }
  
// Switch
let rating = 4;
switch (rating) {
  case 1:
    console.log("very poor");
    break;
  case 2:
    console.log("average");
    break;
  case 3:
    console.log("good");              // prints value of i=1, value of i =2
    break;                            // value of i =3, value of i = 5
  case 4:
    console.log("very good");            // leaves 4 value
    break;
  default:
    console.log("no ratings");
}


