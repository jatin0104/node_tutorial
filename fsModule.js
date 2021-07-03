/**
 *      This is for FS [FILE SYSTEM] functions
 */

const fs = require('fs');

// Write file
console.log('Async Write function: \n')
fs.writeFile('fsFile.txt','Hello world',(err,data)=>{
    console.log('data is currently written in file');
});

console.log('file writing is done.')
