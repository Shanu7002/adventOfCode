import fs from "fs"
import path from "path"

const inicio = performance.now();
const input = fs
    .readFileSync(path.join(__dirname, "../../big_input.txt"), "utf8")
    .trim()
    .split("\n")

let answer = 0;

for(const value of input) {
    let n1 = "0";
    let n2 = "0";
    let n1Index = 0;
    let maxJoltageFound = 0;

    // YOUR FIRST LOOP: Finding the best starting battery (n1)
    for(let num = 0; num < value.length - 1; num++) {
        // We look for a battery that, when paired with the best battery 
        // after it, gives the highest total.
        let tempN1 = value[num];
        let bestN2ForThisN1 = "0";
        
        // YOUR SECOND LOOP (nested slightly to validate n1): 
        // To truly find the "max", n1 must know what comes after it.
        for(let next = num + 1; next < value.length; next++) {
            if(value[next] > bestN2ForThisN1) {
                bestN2ForThisN1 = value[next];
            }
        }

        let currentResult = Number(tempN1 + bestN2ForThisN1);
        if(currentResult > maxJoltageFound) {
            maxJoltageFound = currentResult;
            n1 = tempN1;
            n2 = bestN2ForThisN1;
        }
    }

    // console.log(n1, n2)
    answer += maxJoltageFound;
}
console.log(answer)

const fim = performance.now();
console.log(`Tempo: ${fim - inicio} ms`);