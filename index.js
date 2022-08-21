const fs = require("fs");
//Blocking, synchronous way
const hello = "Hello Node";
console.log(hello);
const txtIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(txtIn);
const txtOut = `This is what about th avocado ${txtIn} ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", txtOut);
console.log("File written!");
const txtOutput = fs.readFileSync("./txt/output.txt", "utf-8");
console.log(txtOutput);