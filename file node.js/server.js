import { error } from "console";
import fs from "fs/promises"
console.log("reading...");

let a=await fs.readFile("aditya.txt")
console.log(a.toString());


// fs.writeFile("aditya2.txt","hey i am also good boy");
await fs.appendFile("aditya2.txt","hey i am also good boy");

    
