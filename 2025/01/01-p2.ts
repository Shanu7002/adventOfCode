// https://adventofcode.com/2025/day/1
import fs from "fs";
import path from "path";

const input = fs
.readFileSync(path.join(__dirname, "../input/01Input.txt"), "utf8")
.trim()
.split("\n");

let dial = 50; 
let answer = 0; 
for(let value of input){ 
    const number = Number(value.slice(1)); 
    
    for(let i = 0; i < number; i++){
        if(value[0] === "R"){
            dial++;
        }
        if(value[0] === "L"){
            dial--;
        }

        if(dial % 100 === 0 || dial === 0){
            answer++;
        }
    }
}

console.log(answer)
