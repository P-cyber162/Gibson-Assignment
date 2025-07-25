/*Write a function that uses object 
destructuring with default values to 
extract name and age from a user object.*/

function getUserInfo(user) {
    const { name = 'Anonymous', age = 30 } = user;
    return { name, age };
  }

  console.log(getUserInfo({ name: "Prince", age: 26 }));