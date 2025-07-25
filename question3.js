/*Write a function 
mergeObjects(obj1, obj2) that merges 
two objects into a new one without 
modifying the originals.*/

function mergeObjects(obj1, obj2){
    let newObj = {...obj1 ,...obj2};
    return newObj;
}

const person1={
    name : "Prince",
    age : 30,
    pet : "dog"
}

const person2={
    name : "John",
    gender : "Male",
    city : "Accra",
    
}

console.log(mergeObjects(person1,person2));