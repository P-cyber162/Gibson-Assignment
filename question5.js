/*Write a factory function 
createUser(name, age) that returns 
an object with name, age, and a 
describe() method.*/

function createUser(name, age){
    return {
        name : name,
        age : age
    }
}

console.log(createUser("Prince", 30));