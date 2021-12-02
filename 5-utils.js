const sayHi=(name)=>{
    console.log(`Hello dear ${name}`);
}
// sayHi exported as a function ; 
// it's like the defualt export in ES6 (only one module per file could be exported)
module.exports = sayHi


{ /* sayHi exported as an object
module.exports = {sayHi}
we need to write sayHi.sayHi in the principal module
*/} 

// const names = ["yes","one","opps","ok"]
// sayHi(names[Math.floor(Math.random()*names.length)]);