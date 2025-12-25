// https://adventofcode.com/2025/day/2
import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(__dirname, "../input/02Input.txt"), "utf8")
  .trim()
  .split(",");

let answer = 0;

for (const value of input) {
  const [start, end] = value.split("-").map(Number);

  for (let num = start; num <= end; num++) {
    const s = num.toString();
    const len = s.length;

    let hasPattern = false;

    for (let i = 1; i <= len / 2; i++) {
      if (len % i === 0) {
        const pattern = s.slice(0, i);
        if (pattern.repeat(len / i) === s) {
          hasPattern = true;
          break;
        }
      }
    }

    if (hasPattern) {
      answer += num;
    }
  }
}

console.log(answer);
