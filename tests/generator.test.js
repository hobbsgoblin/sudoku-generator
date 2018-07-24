import {generate} from "../src/generator";
import {isValidPuzzle} from "../src/sudoku-core";

test('Creates a valid sudoku', () => {
  const puzzle = generate('medium');
  console.log(puzzle);
  expect(isValidPuzzle(puzzle)).toBe(true);
});