// https://adventofcode.com/2025/day/3
import fs from "fs"
import path from "path"

const inicio = performance.now();
const input = fs
    .readFileSync(path.join(__dirname, "../input/test.txt"), "utf8")
    .trim()
    .split("\n")

let answer = 0;

for(const value of input) {
    let n1 = value[0];
    let n2 = "0";
    let n1Index = 0;

    for(let num = 1; num < value.length; num++) {
        if(value[num] > n1){
            if(num === value.length - 1){
                n2 = value[value.length - 1];
                break;
            }
            n1 = value[num];
            n1Index = num + 1;
        }
    }
    for(let num = n1Index; num < value.length; num++) {
        if(value[num] > n2){
            n2 = value[num];
        }
    }
    const result = n1 + n2;
    answer += Number(result);
}
console.log(answer)
const fim = performance.now();
console.log(`Tempo: ${fim - inicio} ms`);