import {generate} from "../src/sudoku-generator";
import {isValidPuzzle} from "sudoku-core";

test('Creates a valid sudoku', () => {
  const puzzle = generate('medium');
  expect(isValidPuzzle(puzzle)).toBe(true);
});