const fs = require('fs')

// Blocking, sycnchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)

// Non-Blocking, asycnchronous way
fs.readFile('./txt/start.txt')

