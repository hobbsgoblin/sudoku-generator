import {getAllowed, copyState, getInitState} from './sudoku-core';
import solve from './solver';

export const generate = (difficulty = 'medium') => {
  const completedPuzzle = createCompletedPuzzle();
  if (completedPuzzle === false) return generate(difficulty);
  const numHolesToDig = 81 - getNumGivens(difficulty);
  return digPuzzle(completedPuzzle, numHolesToDig, getInitState());
};

const createFixedValsFromState = (state) => {
  return state.map(row => row.map(val => val === null ? null : 'fixed'));
};

const createCompletedPuzzle = () => {
  const numGivens = 11;
  const initState = getInitState();
  const newState = addRandomValuesToState(initState, numGivens);
  const fixedVals = createFixedValsFromState(newState);
  const result = solve(newState, [0,0], getInitState([]), fixedVals);
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
  const otherVals = [1,2,3,4,5,6,7,8,9].filter(val => val === givenVal);
  return otherVals.every(val => {
    const newState = copyState(state);
    newState[y][x] = val;
    return solve(newState, [0, 0], getInitState([]), getInitState()) === false;
  });
};

// const prevCell = () => {
//   if (x === 0 && y === 0) return undefined;
//   if (x === 0) return [y - 1, 0];
//   return [y, x - 1];
// };