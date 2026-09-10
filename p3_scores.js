// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
const odds = scores.filter(score => score % 2 != 0);
console.log("odds : ", odds); // odd numbers

const double = odds.map(score => score * 2);
console.log("double : ", double); // double them

const sorted = [...double].sort((a, b) => b - a);
console.log("sorted : ", sorted); // sort descending

const halfLength = Math.ceil(sorted.length / 2);
const resultFirst = sorted.slice(0, halfLength);
console.log("first half : ", resultFirst); // keep the first half


// (b)
const resultSecond = scores
  .filter(score => score % 2 !== 0)
  .map(score => score * 2)
  .sort((a, b) => b - a)
  .slice(0, Math.ceil(scores.filter(score => score % 2 !== 0).length / 2));

console.log("pipeline result:", resultSecond); // single method chain

// (c)
console.log("original scores:", scores);
// the original 'scores' array remains unchanged
// Methods like filter(), map(), and slice() create and return brand new arrays
// instead of modifying the original.
