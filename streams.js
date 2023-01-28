const fs = require('fs');

const readStream = fs.createReadStream('./docs/largeText.txt');
const writeStream = fs.createWriteStream('./docs/temp.txt');

// readStream.on('data', (chunk) => {
//     console.log('new Chunks');
//     console.log(chunk.toString());

//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })


//piping
readStream.pipe(writeStream)