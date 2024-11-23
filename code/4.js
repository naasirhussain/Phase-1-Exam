// 21. Spread operatpor

let arr1  = [1, 2, 3];
let arr2 = [ 4, 5, 6];
let arr = [...arr1, ...arr2];
console.log(arr);
// [ 1, 2, 3,4 ,5, 6]


let obj1 = {
    name: "naasir",
    age: 22
};
let obj2 = {
    ...obj1,
    city: "Hyd",
}
console.log(obj2);
// { name: 'naasir', age: 22, city: 'Hyd' }



// 22. For Of

let z = [10, 20, 30];
for (let example of z) {
   console.log(example);
}                                 // 10 20 30


let z1 = [ 20, 30, 40];
for (let model of z1) {
    console.log(model);    // 20, 30, 40
}


let cfi = ["cfi1", "cfi2", "cfi3"];
for (const edventure of cfi){
   console.log(edventure);        // cfi1, cfi2, cfi3
}

let College = ["naasir", "saad", "omer"];
for (const OU of College){
    console.log(OU);     // nasir, saad, omer
}


// 23. For in



let methodist = {
    fName: "naasir",
    rollNo: 2001,
    age:22,
    area: "abids",
    isEmployed: false,
 }
 console.log(methodist); // prints all details



 let cfi5 = {
    fName: "naasir",
    year: 2024,
    age:22,
    area: "Lakdikapul",
    isEmployed: false,
 }
 console.log(cfi5);    // all details



 // 24. Set timeOut

 let Time = () =>  {
    console.log("Hello");
}
setTimeout(Time, 1000);  // After 1 sec Hello



function alert () {
    console.log("Hi");
}
setTimeout(alert, 5000)



let Time1 = () =>  {
    console.log("Hello boys");
}
setTimeout(Time, 3000);  // After 3 sec Hello Boys


// 25. set Intervals

// setInterval(() => console.log("hi"), 2000);
// prints infinite times


let alert1 = setInterval(() =>{
    console.log("john")
}, 2000)
setTimeout (()=>{
    clearInterval(alert1)
}, 3000);                  
// prints john after 3 sec




// 26. JSON

let person = {
    name: "John",
    age: 30,
}
console.log(JSON.stringify(person));  
// {"name": "Jhon", "age": 30 } gives in strings ( key also given in string)
let check1 = JSON.stringify(person)
console.log(typeof check1, check1); // string, {"name": "Jhon", "age" : "30"}

let check2 = JSON.parse(check1)
console.log(typeof check2, check2);  // object { name: 'Jhon', age: 30}





let person1 ={
    fname: "naasir",
    age: 22,
    area: "HYd",
    id: 2001,
}
console.log(JSON.stringify(person1));  
// {"fName": "naasir", "age": 22 -----} gives in strings ( key also given in string)
let check3 = JSON.stringify(person1)
console.log(typeof check1, check3); // string, {"fName": "naasir", "age": 22 -----}

let check4 = JSON.parse(check1)
console.log(typeof check2, check4);  // object { fname: 'naasir', age: 22, area: 'HYd', id: 2001 }





// 27. Date and time

let now = new Date();
console.log(now);
// 2024-11-23T19:33:50.114Z

console.log(now.getFullYear());  // 2024



let present = new Date();
console.log(Date.parse(new Date()));  // 1732390551000


let date2 = new Date(1732390551000);
console.log(date2);                       // 2024-11-23T19:35:51.000Z
// It gives the total number of seconds from 1970 till now