// 19. Try - catch Block


//  ????

try {
    let obj ={
        name: "Naasir",
        age: 20
    }
    console.log(obj); //prints the object normally
    let nowConverting = JSON.stringify(obj);
    console.log(nowConverting); //prints the json string
    let convertBack = JSON.parse(nowConverting);
    console.log(convertBack);  // convert back into object

} catch (error){
    console.log(error);
}



// 20. Object destructuring

let obj = {
    name: "obj",
    age: 30
}
console.log(obj);  // { name: 'obj', age: 30 }




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
console.log(fname2, age2, isThere2);   // naasir, 22, true 



// 20. Array - destructuring

const [a,b] = [1, 2]
console.log(a,b);  // 1, 2

const[, second] = [1,2]
console.log(second);  // 2

let [ a1, b1, c1 ] = [ 1, 2, 3]
console.log(a1, b1, c1);  // 1 2 3


