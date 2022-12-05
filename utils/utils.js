import { readFile, writeFile } from "node:fs/promises";

export const readInput = async (day) => {
  try {
    const filePath = new URL(`./inputs/day${day}.txt`, import.meta.url);
    const contents = await readFile(filePath, { encoding: "utf8" });
    return contents.split("\n").filter((value) => value);
  } catch (err) {
    console.error(err.message);
  }
};

export const writeSolution = async (day, answer) => {
  try {
    const filePath = new URL(`./answers/day${day}.txt`, import.meta.url);
    const promise = writeFile(filePath, answer, { flag: "w+" });
    await promise;
  } catch (err) {
    console.error(err.message);
  }
};
