// 19. for of & for loops
/* for--of & for--in loops in javascript are both used for iterating, but they have differnt purposes
 and work differntly wirh arrays and objects. understanding when and how to use each is crucial
  for effective iteration


 1.for of -- iterates over strings & arrays only. ( Not objects)
 2. for in --- iterates over objects  */

 let z = [10, 20, 30];
 for (let example of z) {
    console.log(example);
 }                                 // 10 20 30



 let cfi = ["cfi1", "cfi2", "cfi3"];
 for (const edventure of cfi){
    console.log(edventure);        // cfi1, cfi2, cfi3
 }


// 2. for in ......

 let methodist = {
    fName: "naasir",
    rollNo: 2001,
    age:22,
    area: "abids",
    isEmployed: false,
 }
//  console.log(methodist);    // prints all details
 
//  console.log(methodist.area);  // abids

//  console.log(methodist["area"]); // abids


 for (let keys in methodist){
    let values = methodist[keys]
    console.log (keys, values);
 }




 // 20. setTimeOut

 //  set time out 
// --> Executes a function once after a specified delay (in millisecond).
//syntax -- setTimeout (function, delay, param1, param2, ....);



function hello() {
    console.log("hello naasir");
}
setTimeout(hello, 5000);   // 1 sec= 1000 millisecond,  5sec =5000ms
// after 5 sec it prints hello cfi


let hello1 = () =>  {
    console.log("hello anas");
}
setTimeout(hello1, 1000); 

    
setTimeout(() => {
        console.log("hiii");
    }, 7000)                   // after 7 sec it prints hii




// 21. setInterval

/* Executes a function repeatedly at specified intervals ( in milli seconds)
syatax :- 
javascript
copycode
setInterval ( function, delay, param1, param2, .....);
*/




setInterval (() => {
    console.log("Hello");
}, 2000)// prints hello in every 2sec  ( helllo ------------infinity) if not stopped


setInterval(() => console.log("hi"), 3000);
// prints hello in every 3sec  ( hi------------infinity) if not stopped



// to stop it after some time.
let timerId = setInterval(() =>{
    console.log("naasir")
}, 2000)
setTimeout (()=>{
    clearInterval(timerId)
}, 7000);                  // prints naasir 5 times in 10 sec



/* 22. JSON has @ methods
Key mothds

JSON.stringify(object):- converst a javascript objr=ect into a JSON  string
JSON.parse(string) : converts a JSON string a javascript object  */


let person1 ={
    fname: "naasir",
    age: 22,
    area: "HYd",
    id: 2001,
}
console.log(JSON.stringify(person1));  
// {"fName": "naasir", "age": 22 -----} gives in strings ( key also given in string)
let check1 = JSON.stringify(person1)
console.log(typeof check1, check1); // string, {"fName": "naasir", "age": 22 -----}

let check2 = JSON.parse(check1)
console.log(typeof check2, check2);  // object { fname: 'naasir', age: 22, area: 'HYd', id: 2001 }




// 23. date & Time

// To create date there are 4 types



// 1-method
let date= new Date();
console.log(date);      // 2024-11-20T05:54:44.372Z
                         //  date india   & time UTC



// 2- method
let date1 = new Date();
console.log(Date.parse(new Date()));   //  1732082234000

let date2 = new Date(1732082234000);
console.log(date2);                       // 2024-11-20T05:57:14.000Z
// It gives the total number of seconds from 1970 till now




// 3. method
let date3 = new Date ("2002-02-11");
console.log(date3);           // 2002-02-11T00:00:00.000Z


//4. method

let date4 = new Date( 2024,11,20,23,59,40,40);
console.log(date4);             // 2024-12-20T23:59:40.040Z



// To come in our Indian standard Time

let date5 = new Date().toLocaleString("en-IN",  
    { timeZone:"Asia/kolkata",
      weekday: "2-digit",
      year: "3-digit",
      hour:"2-digit",
      month: "long" 
     })
     console.log(date5);