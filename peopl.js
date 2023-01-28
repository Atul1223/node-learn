const people = ['abc','bcd','xyz'];
const num = [1,2,3,4,5];
// console.log(people);

//module.exports = people
module.exports = {
    people,num
};

const os = require('os');
console.log(os.platform(),os.homedir());