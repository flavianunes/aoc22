//  Day 2: Rock Paper Scissors

import { readInput, writeSolution } from "./utils/utils.js";
const input = await readInput("2");

const shape = {
  A: 1,
  B: 2,
  C: 3,
};

const scorePerShape = {
  X: 1,
  Y: 2,
  Z: 3,
};

const getSolution = () => {
  const guide = input.split("\n");
  const total = guide.reduce((acc, match) => {
    const [opponent, me] = match.split(" ");
    const totalScore = scorePerShape[me] + getMatchScore(opponent, me);
    return acc + totalScore;
  }, 0);
  return total + "";
};

const getMatchScore = (opponent, me) => {
  if (shape[opponent] === scorePerShape[me]) return 3;

  const sub = scorePerShape[me] - shape[opponent];

  if (sub === 1 || sub === -2) return 6;
  if (sub === -1 || sub === 2) return 0;
};

const answer = getSolution();

await writeSolution("2", answer);
