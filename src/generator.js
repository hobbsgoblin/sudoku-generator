import solve, {arraysAreIdentical, getAllowed, isSolved, printState} from './solver';

function getInitState(fillVal = null) {
  return Array(9).fill([]).map(() => [...(Array(9).fill(fillVal))]);
}

const createCompletedPuzzle = () => {
  const numGivens = 11;
  const initState = getInitState();
  const newState = addRandomValuesToState(initState, numGivens);
  console.log(printState(newState));
  const fixedVals = newState.map(row => {
    return row.map(val => val === null ? null : 'fixed');
  });
  const result = newerSolve(newState, [0,0], getInitState([]), fixedVals);
  console.log(result);
  // console.log(printState(result));
};

// const copyState = state => state.map(row => row.slice());
function copyState(state) {
  let i, copy;
  if( Array.isArray( state ) ) {
    copy = state.slice( 0 );
    for( i = 0; i < copy.length; i++ ) {
      copy[ i ] = copyState( copy[ i ] );
    }
    return copy;
  } else if( state !== null && typeof state === 'object' ) {
    throw 'Cannot clone array containing an object!';
  } else {
    return state;
  }
}


function addRandomValuesToState(state, numVals = 1, ) {
  if (numVals === 0) return state;
  const x = getRandom(0, 8);
  const y = getRandom(0, 8);
  if (state[y][x] !== null) return addRandomValuesToState(state, numVals);  // If already added a value here, try again
  const allowed = getAllowed(state, [y, x]);
  state[y][x] = getRandomArrayVal(allowed);
  return addRandomValuesToState(state, numVals - 1);
}

const getRandom = (lowerBound = 1, upperBound = 9) => {
  return Math.floor(Math.random() * upperBound) + lowerBound;
};

const getRandomArrayVal = (arr) => {
  return arr[getRandom(0, arr.length)];
};

const generate = (difficulty = 'medium') => {
  const completedPuzzle = createCompletedPuzzle();
};

function newSolve(state, [y, x]) {
  const nextCell = () => {
    if (x === 8 && y === 8) return null;
    if (x === 8) return [y + 1, 0];
    return [y, x + 1];
  };
  const prevCell = () => {
    if (x === 0 && y === 0) return null;
    if (x === 0) return [y - 1, 0];
    return [y, x - 1];
  };
  // const allowed = allowedVals ? allowedVals : getAllowed(state, [y, x]);
  if (nextCell() === null && state[y][x] !== null) return state;
  if (nextCell() === null) {
    const finalState = copyState(state);
    const finalAllowed = getAllowed(state, [8,8]);
    if (finalAllowed.length) {
      return finalAllowed[0];
      // finalState[y][x] = finalAllowed[0];
      // console.log(printState(finalState));
      // return finalState;
    }
    return undefined;
  }
  const [nextY, nextX] = nextCell();
  if (state[y][x] === null) {
    const allowedVals = getAllowed(state, [y, x]);
    const newVal = allowedVals.find((val) => {
      console.log(`attempting ${val} on [${y}, ${x}]`);
      const newState = copyState(state);
      newState[y][x] = val;
      return newSolve(newState, [nextY, nextX]) !== undefined;
    });
    if (newVal === undefined) return undefined;
    const newState = copyState(state);
    newState[y][x] = newVal;
    console.log(printState(newState));
    return newSolve(newState, [nextY, nextX]);
  }
  return newSolve(state, [nextY, nextX]);
}

const nextCell = (curY, curX) => {
  if (curX === 8 && curY === 8) return null;
  if (curX === 8) return [curY + 1, 0];
  return [curY, curX + 1];
};

// const prevCell = () => {
//   if (x === 0 && y === 0) return null;
//   if (x === 0) return [y - 1, 0];
//   return [y, x - 1];
// };

const getValidAllowed = (state, [y, x], invalidVals) => {
  return getAllowed(state, [y, x])
    .filter(val => !invalidVals[y][x].includes(val));
};

function newerSolve(state, [y, x], invalidVals, fixedVals) {
  if (fixedVals[y][x] === 'fixed') {
    const [nextY, nextX] = nextCell(y, x);
    return newerSolve(state, [nextY, nextX], invalidVals, fixedVals);
  }
  const allowedVals = getValidAllowed(state, [y, x], invalidVals);
  if (!allowedVals.length) return false;
  const tryVal = allowedVals[0];
  console.log(printState(state));
  console.log("allowed: " + allowedVals);
  console.log("tryVal: " + tryVal + " on " + y + ", " + x);
  // console.log(state);
  let newState = copyState(state);
  newState[y][x] = tryVal;
  if (y === 8 && x === 8) return {solved: true, completedState: newState};
  const [nextY, nextX] = nextCell(y, x);
  let result = newerSolve(newState, [nextY, nextX], invalidVals, fixedVals);
  if (typeof result === 'object' && result.solved === true) return result;
  if (result === false) {
    // console.log('FALSE!');
    invalidVals[y][x] = invalidVals[y][x].concat(tryVal);  // TODO: make immutable
    const newInvalid = copyState(invalidVals).map((invRow, invY) => {
      if (invY > y) return invRow.fill([]);
      if (invY === y) return invRow.fill([], x + 1);
      return invRow;
    });
    newState = undefined;
    invalidVals = undefined;
    result = undefined;
    return newerSolve(state, [y, x], newInvalid, fixedVals);
  }
  console.log('how did we get here?');
}

generate();

export default generate;