import { getAllowed, copyState, getInitState } from 'sudoku-core';
import solve from 'sudoku-solver';

export const generate = (difficulty = 'medium') => {
  const completedPuzzle = createCompletedPuzzle();
  if (completedPuzzle === false) return generate(difficulty);
  const numHolesToDig = 81 - getNumGivens(difficulty);
  const puzzle = digPuzzle(completedPuzzle, numHolesToDig, getInitState());
  return {puzzle, solution: completedPuzzle};
};

const createCompletedPuzzle = () => {
  const numGivens = 11;
  const initState = getInitState();
  const newState = addRandomValuesToState(initState, numGivens);
  const result = solve(newState);
  return result.completedState;
};

function addRandomValuesToState(state, numVals = 1) {
  if (numVals === 0) return state;
  const x = getRandom(0, 8);
  const y = getRandom(0, 8);
  if (state[y][x] !== null) return addRandomValuesToState(state, numVals);  // If already added a value here, try again
  const allowed = getAllowed(state, [y, x]);
  state[y][x] = getRandomArrayVal(allowed);
  return addRandomValuesToState(state, numVals - 1);
}

const getRandom = (lowerBound = 1, upperBound = 9) => {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
};

const getRandomArrayVal = (arr) => {
  return arr[getRandom(0, arr.length - 1)];
};

// The number of given values in the puzzle
const getNumGivens = (difficulty) => {
  const numGivensRanges = {
    'very_easy': [50, 55],
    'easy': [36, 49],
    'medium': [32, 35],
    'hard': [28, 31],
    'very_hard': [22, 27],
  };
  const [min, max] = numGivensRanges[difficulty];
  return getRandom(min, max);
};

function digPuzzle(state, numToDig, undiggableCells) {
  if (numToDig === 0) return state;
  const randY = getRandom(0, 8);
  const randX = getRandom(0, 8);
  if (state[randY][randX] === null || undiggableCells[randY][randX] === true) return digPuzzle(state, numToDig, undiggableCells);
  const result = digCell(state, [randY, randX]);
  if (result === false) {
    const newUndiggableCells = copyState(undiggableCells);
    newUndiggableCells[randY][randX] = true;
    return digPuzzle(state, numToDig, newUndiggableCells);
  }
  const newState = copyState(state);
  newState[randY][randX] = null;
  return digPuzzle(newState, numToDig - 1, undiggableCells);
}

const digCell = (state, [y, x]) => {
  const givenVal = state[y][x];
  const otherAllowedVals = getAllowed(state, [y, x]).filter(val => val !== givenVal);
  return otherAllowedVals.every(val => {
    const newState = copyState(state);
    newState[y][x] = val;
    return solve(newState) === false;
  });
};

// const multipleSolutionPuzzle = [
//   [1,2,3,4,5,6,7,8,9],
//   [4,7,8,3,1,9,6,2,5],
//   [6,5,9,7,null,null,4,3,1],
//   [5,1,4,2,6,7,3,9,8],
//   [3,6,7,8,9,5,2,1,4],
//   [8,9,2,1,4,3,5,6,7],
//   [2,3,5,9,7,1,8,4,6],
//   [9,8,6,5,3,4,1,7,2],
//   [7,4,1,6,null,null,9,5,3],
// ];

// const prevCell = () => {
//   if (x === 0 && y === 0) return undefined;
//   if (x === 0) return [y - 1, 0];
//   return [y, x - 1];
// };
