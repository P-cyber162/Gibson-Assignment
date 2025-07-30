/*Write a function isEmpty(obj) 
that checks whether an object has 
any own properties.*/

function isEmpty(object){
    if(Object.keys(object).length!==0){
        console.log("Object has it's own properties");
    }
    else{
        console.log("Objects does not have it's own properties");
    }
}

const person={
    name : "Prince",
    age : 30,
}

isEmpty(person);
isEmpty({});