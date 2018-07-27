import {generate} from "../src/generator";
import {isValidPuzzle} from "../node_modules/sudoku-core/src/sudoku-core";

test('Creates a valid sudoku', () => {
  const puzzle = generate('medium');
  expect(isValidPuzzle(puzzle)).toBe(true);
});