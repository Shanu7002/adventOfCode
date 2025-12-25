// https://adventofcode.com/2025/day/1
import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.join(__dirname, "../input/01Input.txt"), "utf8")
  .trim()
  .split("\n");

let dial = 50;
let answer = 0;

for (const line of input) {
  const direction = line[0];
  const steps = Number(line.slice(1));

  const delta = direction === "R" ? 1 : -1;

  for (let i = 0; i < steps; i++) {
    dial += delta;

    if (dial === 0 || dial % 100 === 0) {
      answer++;
    }
  }
}

console.log(answer);
