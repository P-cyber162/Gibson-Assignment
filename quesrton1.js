/*Create an object person with 
properties name, age, and a method 
greet() that returns a greeting 
message using the name.*/

const person={
    name : "Prince",
    age : 30,
    greet : function (){
        console.log(`Hello ${this.name}`)
    }
}
console.log(person);
console.log(person.greet());