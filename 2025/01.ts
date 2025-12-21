// https://adventofcode.com/2025/day/1
import fs from "fs"
import path from "path"

const input = fs
.readFileSync(path.join(__dirname, "./input/01Input.txt"), "utf8")
.trim()
.split("\n");

// Write an output
//fs.writeFileSync("./2025/outputs/01Output.txt", input.join());

let dial = 50;
let answer = 0;
for(let value of input){
    const number = value.slice(1);
    if(value.charAt(0) == "R"){
        dial += Number(number);
    } else {
        dial -= Number(number);
    }
    if (dial % 100 == 0 || dial == 0) answer++;
}
console.log(answer)