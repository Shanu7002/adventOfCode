// https://adventofcode.com/2025/day/2
import fs from "fs";
import path from "path";

const input = fs
.readFileSync(path.join(__dirname, "../input/02Input.txt"), "utf8")
.trim()
.split(",")

let answer = 0; 
for(let value of input){ 
    const range = value.split("-");
    let first = range[0]
    let second = range[1]

    let firstNumber = Number(first)
    while (firstNumber <= Number(second)) {
    const s = firstNumber.toString();
    const length = s.length;

    if (length % 2 === 0) {
        const mid = length / 2;
        const firstHalf = s.slice(0, mid);
        const secondHalf = s.slice(mid);

        if (firstHalf === secondHalf) {
            answer += firstNumber;
        }
    }

    firstNumber++;
    }
}

console.log(answer)
