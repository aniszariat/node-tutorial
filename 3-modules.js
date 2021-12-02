// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share the minimum) 
// const john ='john'
// const sam = 'sam'
// const sayHi=(name)=>{
//     console.log(`Hello dear ${name}`);
// }

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')

console.log(names);
require('./7-mind')
console.log(data);
// sayHi('Anis')
// sayHi(names.john)
// sayHi(names.sam)