/*Loop through an object and log all 
keys and values using a for...in loop 
or Object.entries().*/

const person={
    name : "Prince",
    age : 30,
    pet : "dog"
}

for(let key in person){
    console.log(`${key }: ${person[key]}`)
} // console.log(Object.entries(person));


