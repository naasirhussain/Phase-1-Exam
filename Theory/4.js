// 17. Try-Catch Block

// It just gives only  error line not all stufffff.....

// Working code comes in try
// error code comes in catch


try{
    let name = "naasir";
    console.log(name);
} catch(error){
    console.log("may be errror will occur", error.messege);
}         // naasir



function test(pass) {
    try {
        let obj = {name: pass};
        console.log(obj.name);
    } catch (error){
        console.log("error name :", error.name);
        console.log("error masg:", error.masg);
    }
}
test ("naasir");  // naasir



// 18. Object destructuring

/*  Object and array destructuring in javascript is a concise and elegent way to
 extract values from arrays and objects into individual variables.
 it was introduced in ES6 and is widly used for cleaner more readble code. */


 let person = {
    fname: "naasir",
    lnane: "Hussain",
    age: 22,
    isThere : true,
    balance: null,
 }
 console.log(person);  // prints all details
 console.log(person.fname, person.age);  // naaasir,  22

let fname1 = person.fname
let age1 = person.age
let isThere1 = person.isThere

console.log(fname1);       // naasir
console.log(age1);         // 22
console.log(isThere1);     // true

let {fname2, age2, isThere2   } = person;
console.log(fname, age, isThere);   // naasir, 22, true


// 19. Array destrucuring

let arr = ["naasir", "Hussain", 25, true, false, [10, 20, 30, "suhail", true]];
//             0         1       2    3      5                5
//                                                 0   1    2      3    4

let box1 = arr[]




// let [ fifth, second, zero, forth, fifth,  first] = arr;
//arr[0] arr[1]  arr[2] arr[3] arr[4] arr[4] 

let [zero, first, second, third, fouth, fifth] = arr;
//   arr[0] arr[1]  arr[2] arr[3] arr[4] arr[4]
console.log(zero, first, second, third, fouth, fifth);
// naasir Hussain  ----------[10, 20, ---- true];

