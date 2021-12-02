const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the systme uptime in seconds
console.log(`the system uptime is ${os.uptime()} sec`);

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMemory : os.totalmem(),
    freeMemory :os.freemem()
}
console.log(currentOS); 