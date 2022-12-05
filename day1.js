//  Day 1: Calorie Counting

import { readInput, writeSolution, add } from "./utils/utils.js";
const input = await readInput("1");

const getSolution = () => {
  const caloriesPerElf = input
    .split(/\n{2,}/g)
    .map((value) => value.split("\n"));
  const totalCaloriesPerElf = caloriesPerElf.map((elf) => elf.reduce(add, 0));
  const mostCaloriesElves = maxThree(totalCaloriesPerElf, [], 0);
  return mostCaloriesElves.reduce(add, 0) + "";
};

const maxThree = (calories, r, n) => {
  if (n === 3) return r;

  const max = Math.max(...calories);
  const index = calories.indexOf(max);
  r.push(...calories.splice(index, 1));
  n += 1;

  return maxThree(calories, r, n);
};

const answer = getSolution();

await writeSolution("1", answer);
