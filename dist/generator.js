var generator =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/generator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _solver = _interopRequireWildcard(__webpack_require__(/*! ./solver */ "./src/solver.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getInitState() {
  var fillVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return Array(9).fill([]).map(function () {
    return _toConsumableArray(Array(9).fill(fillVal));
  });
}

var createCompletedPuzzle = function createCompletedPuzzle() {
  var numGivens = 11;
  var initState = getInitState();
  var newState = addRandomValuesToState(initState, numGivens);
  console.log((0, _solver.printState)(newState));
  var fixedVals = newState.map(function (row) {
    return row.map(function (val) {
      return val === null ? null : 'fixed';
    });
  });
  var result = newerSolve(newState, [0, 0], getInitState([]), fixedVals);
  console.log(result); // console.log(printState(result));
}; // const copyState = state => state.map(row => row.slice());


function copyState(state) {
  var i, copy;

  if (Array.isArray(state)) {
    copy = state.slice(0);

    for (i = 0; i < copy.length; i++) {
      copy[i] = copyState(copy[i]);
    }

    return copy;
  } else if (state !== null && _typeof(state) === 'object') {
    throw 'Cannot clone array containing an object!';
  } else {
    return state;
  }
}

function addRandomValuesToState(state) {
  var numVals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (numVals === 0) return state;
  var x = getRandom(0, 8);
  var y = getRandom(0, 8);
  if (state[y][x] !== null) return addRandomValuesToState(state, numVals); // If already added a value here, try again

  var allowed = (0, _solver.getAllowed)(state, [y, x]);
  state[y][x] = getRandomArrayVal(allowed);
  return addRandomValuesToState(state, numVals - 1);
}

var getRandom = function getRandom() {
  var lowerBound = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var upperBound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
  return Math.floor(Math.random() * upperBound) + lowerBound;
};

var getRandomArrayVal = function getRandomArrayVal(arr) {
  return arr[getRandom(0, arr.length)];
};

var generate = function generate() {
  var difficulty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  var completedPuzzle = createCompletedPuzzle();
};

function newSolve(state, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      y = _ref2[0],
      x = _ref2[1];

  var nextCell = function nextCell() {
    if (x === 8 && y === 8) return null;
    if (x === 8) return [y + 1, 0];
    return [y, x + 1];
  };

  var prevCell = function prevCell() {
    if (x === 0 && y === 0) return null;
    if (x === 0) return [y - 1, 0];
    return [y, x - 1];
  }; // const allowed = allowedVals ? allowedVals : getAllowed(state, [y, x]);


  if (nextCell() === null && state[y][x] !== null) return state;

  if (nextCell() === null) {
    var finalState = copyState(state);
    var finalAllowed = (0, _solver.getAllowed)(state, [8, 8]);

    if (finalAllowed.length) {
      return finalAllowed[0]; // finalState[y][x] = finalAllowed[0];
      // console.log(printState(finalState));
      // return finalState;
    }

    return undefined;
  }

  var _nextCell = nextCell(),
      _nextCell2 = _slicedToArray(_nextCell, 2),
      nextY = _nextCell2[0],
      nextX = _nextCell2[1];

  if (state[y][x] === null) {
    var allowedVals = (0, _solver.getAllowed)(state, [y, x]);
    var newVal = allowedVals.find(function (val) {
      console.log("attempting ".concat(val, " on [").concat(y, ", ").concat(x, "]"));
      var newState = copyState(state);
      newState[y][x] = val;
      return newSolve(newState, [nextY, nextX]) !== undefined;
    });
    if (newVal === undefined) return undefined;
    var newState = copyState(state);
    newState[y][x] = newVal;
    console.log((0, _solver.printState)(newState));
    return newSolve(newState, [nextY, nextX]);
  }

  return newSolve(state, [nextY, nextX]);
}

var nextCell = function nextCell(curY, curX) {
  if (curX === 8 && curY === 8) return null;
  if (curX === 8) return [curY + 1, 0];
  return [curY, curX + 1];
}; // const prevCell = () => {
//   if (x === 0 && y === 0) return null;
//   if (x === 0) return [y - 1, 0];
//   return [y, x - 1];
// };


var getValidAllowed = function getValidAllowed(state, _ref3, invalidVals) {
  var _ref4 = _slicedToArray(_ref3, 2),
      y = _ref4[0],
      x = _ref4[1];

  return (0, _solver.getAllowed)(state, [y, x]).filter(function (val) {
    return !invalidVals[y][x].includes(val);
  });
};

function newerSolve(state, _ref5, invalidVals, fixedVals) {
  var _ref6 = _slicedToArray(_ref5, 2),
      y = _ref6[0],
      x = _ref6[1];

  if (fixedVals[y][x] === 'fixed') {
    // newState = undefined;
    var _nextCell3 = nextCell(y, x),
        _nextCell4 = _slicedToArray(_nextCell3, 2),
        _nextY = _nextCell4[0],
        _nextX = _nextCell4[1];

    return newerSolve(state, [_nextY, _nextX], invalidVals, fixedVals);
  }

  var allowedVals = getValidAllowed(state, [y, x], invalidVals);
  if (!allowedVals.length) return false;
  var tryVal = allowedVals[0];
  console.log((0, _solver.printState)(state));
  console.log("allowed: " + allowedVals);
  console.log("tryVal: " + tryVal + " on " + y + ", " + x); // console.log(state);

  var newState = copyState(state);
  newState[y][x] = tryVal;
  if (y === 8 && x === 8) return {
    solved: true,
    completedState: newState
  };

  var _nextCell5 = nextCell(y, x),
      _nextCell6 = _slicedToArray(_nextCell5, 2),
      nextY = _nextCell6[0],
      nextX = _nextCell6[1];

  var result = newerSolve(newState, [nextY, nextX], invalidVals, fixedVals);
  if (_typeof(result) === 'object' && result.solved === true) return result;

  if (result === false) {
    // console.log('FALSE!');
    invalidVals[y][x] = invalidVals[y][x].concat(tryVal); // TODO: make immutable

    var newInvalid = copyState(invalidVals).map(function (invRow, invY) {
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
var _default = generate;
exports.default = _default;

/***/ }),

/***/ "./src/solver.js":
/*!***********************!*\
  !*** ./src/solver.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = solve;
exports.printState = exports.checkSolutionIsValid = exports.isSolved = exports.arraysAreIdentical = exports.getAllowed = exports.getAdjacentCoords = exports.getAdjacentValues = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Returns all of the values in the same row, column, and square of a given coordinate
var getAdjacentValues = function getAdjacentValues(state, coord) {
  var _coord = _slicedToArray(coord, 2),
      y = _coord[0],
      x = _coord[1];

  var xVals = state[y];
  var yVals = state.map(function (row) {
    return row[x];
  });
  var squareVals = getValues(state, getSquareCoords(getSquare(y, x)));
  return {
    x: xVals,
    y: yVals,
    squareVals: squareVals
  };
}; // Returns all of the coordinates in the same row, column, and square of a given coordinate


exports.getAdjacentValues = getAdjacentValues;

var getAdjacentCoords = function getAdjacentCoords(coord) {
  var _coord2 = _slicedToArray(coord, 2),
      y = _coord2[0],
      x = _coord2[1];

  var xCoords = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (y) {
    return [y, x];
  }).filter(function (coord) {
    return coord[0] !== y;
  });
  var yCoords = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (x) {
    return [y, x];
  }).filter(function (coord) {
    return coord[1] !== x;
  });
  var squareCoords = getSquareCoords(getSquare(y, x)).filter(function (coord) {
    return coord[0] !== y || coord[1] !== x;
  });
  return {
    x: xCoords,
    y: yCoords,
    squareCoords: squareCoords
  };
}; // Same as getAdjacentCoords but includes given coordinate


exports.getAdjacentCoords = getAdjacentCoords;

var getAdjacentCoordsInclusive = function getAdjacentCoordsInclusive(coord) {
  var _coord3 = _slicedToArray(coord, 2),
      y = _coord3[0],
      x = _coord3[1];

  var xCoords = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (y) {
    return [y, x];
  });
  var yCoords = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (x) {
    return [y, x];
  });
  var squareCoords = getSquareCoords(getSquare(y, x));
  return {
    x: xCoords,
    y: yCoords,
    squareCoords: squareCoords
  };
}; // Attempt to find the solution for a given coord


var checkForSolution = function checkForSolution(state, coord) {
  var _coord4 = _slicedToArray(coord, 2),
      y = _coord4[0],
      x = _coord4[1];

  if (state[y][x]) return state[y][x];
  var adjacentCoords = getAdjacentCoords(coord);
  var allowed = getAllowed(state, coord);
  var xAllowed = getXAllowed(state, coord);
  var yAllowed = getYAllowed(state, coord);
  var squareAllowed = getSquareAllowed(state, coord);
  if (xAllowed.length === 1) return xAllowed[0];
  if (yAllowed.length === 1) return yAllowed[0];
  if (squareAllowed.length === 1) return squareAllowed[0];
  var options = getOptions(state, coord);

  if (allowed.length === 1) {
    return allowed[0];
  }

  if (options.length === 1) {
    return options[0];
  }

  if (allowed.length === 0) {
    var err = new Error();
    err.data = {
      state: state,
      coords: [y, x]
    };
    throw err; // If there are no options then there was an error earlier
  } // Check what OTHER adjacent nulls CAN'T be
  // For squares, x-line, and y-line


  var xNonOptions = getNonOptions(state, adjacentCoords.x);
  var yNonOptions = getNonOptions(state, adjacentCoords.y);
  var squareNonOptions = getNonOptions(state, adjacentCoords.squareCoords);
  if (xNonOptions.length === 1) return xNonOptions[0];
  if (yNonOptions.length === 1) return yNonOptions[0];
  if (squareNonOptions.length === 1) return squareNonOptions[0]; // If no solution is found return null

  return null;
}; // Detect if multiple coords have the exact same options
// Detect if the number of coords with the same options is the same as the number of values
// Remove those values from all other coords
// Check for x, y, and square coords and then intersect results?
// Create metastate with new options in place of previous getOptions?
// Otherwise modify getOptions to use do this automatically?
// test = [
//     {coord: [2,1], options: [1,2,7,8], mustBeOf: null},
//     {coord: [5,1], options: [2,7,8], mustBeOf: null},
//     {coord: [7,1], options: [1,2], mustBeOf: null},
//     {coord: [8,1], options: [1,2], mustBeOf: null},
// ];
// If first array contains second array


var arrayContainsArray = function arrayContainsArray(containerArray, array) {
  return containerArray.filter(function (item) {
    return Array.isArray(item) && arrayIntersect(item, array).length === array.length;
  }).length > 0;
};

var arrayIntersect = function arrayIntersect() {
  for (var _len = arguments.length, arrs = new Array(_len), _key = 0; _key < _len; _key++) {
    arrs[_key] = arguments[_key];
  }

  return arrs.reduce(function (intersecting, arr) {
    var set1 = new Set(intersecting),
        set2 = new Set(arr);
    return _toConsumableArray(set1).filter(function (val) {
      return set2.has(val);
    });
  }, arrs.pop());
};

var getAllowed = function getAllowed(state, coord) {
  var adjacent = getAdjacentValues(state, coord);
  var adjacentVals = [].concat(adjacent.x, adjacent.y, adjacent.squareVals);
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (num) {
    return !adjacentVals.includes(num);
  });
};

exports.getAllowed = getAllowed;

var getXAllowed = function getXAllowed(state, coord) {
  var adjacent = getAdjacentValues(state, coord);
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (num) {
    return !adjacent.x.includes(num);
  });
};

var getYAllowed = function getYAllowed(state, coord) {
  var adjacent = getAdjacentValues(state, coord);
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (num) {
    return !adjacent.y.includes(num);
  });
};

var getSquareAllowed = function getSquareAllowed(state, coord) {
  var adjacent = getAdjacentValues(state, coord);
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (num) {
    return !adjacent.squareVals.includes(num);
  });
};

var getOptions = function getOptions(state, coord) {
  var allowed = getAllowed(state, coord);
  var adjCoordsInc = getAdjacentCoordsInclusive(coord); // Get adjacent coordinates, both num and null

  var xMatching = findMatching(state, adjCoordsInc.x);
  var yMatching = findMatching(state, adjCoordsInc.y);
  var squareMatching = findMatching(state, adjCoordsInc.squareCoords);
  [].concat(xMatching, yMatching, squareMatching).forEach(function (match) {
    if (!arraysAreIdentical(allowed, match)) {
      allowed = allowed.filter(function (val) {
        return !match.includes(val);
      });
    }
  });
  return allowed;
};

var findMatching = function findMatching(state, adjacent) {
  var xNullCoords = filterNullCoords(state, adjacent, true); // Null adjacent coordinates

  var xExistingVals = getValues(state, filterNullCoords(state, adjacent)); // Non-null values

  var xNonExistingVals = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (num) {
    return !xExistingVals.includes(num);
  }); // Vals not in X yet

  var xEval = xNullCoords.map(function (coord) {
    return {
      coord: coord,
      available: xNonExistingVals,
      options: getAllowed(state, coord) // Legal values for coord

    };
  });
  return xEval.reduce(function (matching, coord) {
    // Get all OTHER coords with matching options
    var matchingOps = xEval.filter(function (otherCoord) {
      return arraysAreIdentical(coord.options, otherCoord.options) && !arraysAreIdentical(coord.coord, otherCoord.coord);
    });

    if (matchingOps.length === coord.options.length - 1 && !arrayContainsArray(matching, coord.options)) {
      return matching.concat([coord.options]);
    }

    return matching;
  }, []);
};

var getNonOptions = function getNonOptions(state, coords) {
  // Get null coordinates
  var nullCoords = filterNullCoords(state, coords, true);
  var nonNullCoords = filterNullCoords(state, coords); // Get all values that the null coordinates cannot be,
  // and that aren't already in the other coordinates

  var nullCoordNonOptions = nullCoords.reduce(function (nonOptions, nullCoord) {
    // Get all values that the coordinate COULD be
    var options = getOptions(state, nullCoord); // Add all values that aren't an option for the coordinate

    return nonOptions.concat([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (num) {
      return !options.includes(num);
    }));
  }, []).filter(function (option) {
    return !getValues(state, nonNullCoords).includes(option);
  }); // Get all values that are "non-options" for EVERY null coordinate given

  var remainingNonOptions = nullCoordNonOptions.reduce(function (nonOptions, option, index, arr) {
    if (arr.filter(function (op) {
      return op === option;
    }).length === nullCoords.length) {
      return nonOptions.concat(option);
    }

    return nonOptions;
  }, []); // Return unique values from

  return Array.from(new Set(remainingNonOptions));
};

var getValues = function getValues(state, coordinates) {
  return coordinates.map(function (coord) {
    return getValue(state, coord);
  });
};

var filterNullCoords = function filterNullCoords(state, coords) {
  var onlyNulls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (onlyNulls) {
    return coords.filter(function (coord) {
      return getValue(state, coord) === null;
    });
  }

  return coords.filter(function (coord) {
    return getValue(state, coord) !== null;
  });
}; // Get the value of a given coordinate from the given puzzle state


var getValue = function getValue(state, coordinate) {
  return state[coordinate[0]][coordinate[1]];
}; // Get the square (1 through 9) that contains the given coordinates
// TODO: Consider caching square/coordinate maps to save performance


var getSquare = function getSquare(y, x) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].find(function (square) {
    return getSquareCoords(square).some(function (coord) {
      return arraysAreIdentical(coord, [y, x]);
    });
  });
}; // Get the coordinates contained within in a given square (1 through 9)


var getSquareCoords = function getSquareCoords(square) {
  // No reason to calculate this each time, stored data as a property
  return squareCoordMap[square]; // const yMapper = {
  //   1: [0, 1, 2], 2: [0, 1, 2], 3: [0, 1, 2],
  //   4: [3, 4, 5], 5: [3, 4, 5], 6: [3, 4, 5],
  //   7: [6, 7, 8], 8: [6, 7, 8], 9: [6, 7, 8],
  // };
  // const xMapper = {
  //   1: [0, 1, 2], 2: [3, 4, 5], 3: [6, 7, 8],
  //   4: [0, 1, 2], 5: [3, 4, 5], 6: [6, 7, 8],
  //   7: [0, 1, 2], 8: [3, 4, 5], 9: [6, 7, 8],
  // };
  // const yVals = [].concat(yMapper[square], yMapper[square], yMapper[square]).sort();
  // const xVals = [].concat(xMapper[square], xMapper[square], xMapper[square]);
  // return yVals.map((val, index) => [val, xVals[index]]);
  //
  // // return yMapper[square].reduce((coords, y) => {
  // //   return coords.concat(xMapper[square].map(x => [y, x]));
  // // }, []);
};

var getUniqueValues = function getUniqueValues(array) {
  return Array.from(new Set(array));
};

var arraysAreIdentical = function arraysAreIdentical(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;
  if (arr1.length !== arr2.length) return false;

  for (var i = arr1.length; i--;) {
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      if (!arraysAreIdentical(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

exports.arraysAreIdentical = arraysAreIdentical;

var isSolved = function isSolved(state) {
  var _ref;

  return !(_ref = []).concat.apply(_ref, _toConsumableArray(state)).includes(null);
};

exports.isSolved = isSolved;

var checkSolutionIsValid = function checkSolutionIsValid(state) {
  var valsAreValid = function valsAreValid(arr) {
    return arraysAreIdentical([1, 2, 3, 4, 5, 6, 7, 8, 9], arr.slice().sort());
  };

  var rows = state;
  var cols = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (x) {
    return state.map(function (row) {
      return row[x];
    });
  });
  var squares = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (square) {
    return getValues(state, getSquareCoords(square));
  });
  var rowsValid = rows.every(valsAreValid);
  var colsValid = cols.every(valsAreValid);
  var squaresValid = squares.every(valsAreValid);
  return rowsValid && colsValid && squaresValid;
};

exports.checkSolutionIsValid = checkSolutionIsValid;

var solveShallow = function solveShallow(state) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var prevState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  try {
    state[y][x] = checkForSolution(state, [y, x]);
  } catch (error) {
    // console.log(error);
    // if (error.data) console.log(printState(error.data.state));
    return {
      solved: false,
      state: state,
      error: error
    };
  }

  if (x === 8 && y === 8) {
    if (isSolved(state)) {
      console.log(printState(state));
      console.log('Solved!');
      return {
        solved: true,
        state: state
      };
    }

    if (prevState !== null) {
      if (arraysAreIdentical(state, prevState)) {
        return {
          solved: false,
          state: state
        }; // Break out if no solution found. Prevents infinite recursion
      }
    }

    prevState = copyState(state);
    return solveShallow(state, 0, 0, prevState);
  }

  if (x === 8) {
    return solveShallow(state, 0, y + 1, prevState);
  }

  return solveShallow(state, x + 1, y, prevState);
};

var solveDeep = function solveDeep(state) {
  var solveAttempt = solveShallow(state);

  if (solveAttempt.solved === false) {
    state = copyState(solveAttempt.state); // Just gonna go ahead and do some heavy nested looping here
    // For each null cell, get it's possible values,
    // then try solving it with each one until a correct solution is found

    var numFilledCells = state.reduce(function (numFilled, row) {
      return row.reduce(function (numFilled2, cell) {
        if (cell) numFilled2++;
        return numFilled2;
      }, numFilled);
    }, 0); // if (numFilledCells < 17) return {solved: false, state: state, error: 'Less than 17 cells'};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = state.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            y = _step$value[0],
            row = _step$value[1];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = row.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                x = _step2$value[0],
                val = _step2$value[1];

            if (val === null) {
              var options = getOptions(state, [y, x]);
              if (options.length > 8) continue;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var option = _step3.value;
                  var testState = copyState(state);
                  testState[y][x] = option;
                  var result = solveShallow(testState);

                  if (result.solved === true) {
                    return result;
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return solveAttempt;
};

var copyState = function copyState(state) {
  return state.map(function (arr) {
    return _toConsumableArray(arr);
  });
};

var printState = function printState(state) {
  return state.reduce(function (text, row, index) {
    if (index === 3 || index === 6) {
      text = text.concat("\n"); // Add horizontal spacing
    }

    var rowString = row.reduce(function (rowText, val, rowIndex) {
      val = val === null ? '_' : val;

      if (rowIndex === 3 || rowIndex === 6) {
        rowText = rowText.concat(' '); // Add vertical spacing
      }

      return rowText.concat(' ' + val);
    }, '');
    return text.concat("|" + rowString + " |\n");
  }, '');
};

exports.printState = printState;

var isValidValue = function isValidValue(val) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(val);
};

var parseState = function parseState(inputState) {
  return inputState.map(function (row) {
    return row.map(function (val) {
      return isValidValue(val) ? val : null;
    });
  });
};

function solve(startState) {
  var state = parseState(startState);
  return solveDeep(state);
}

; // Map of squares to the coordinates they contain

var squareCoordMap = {
  1: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
  2: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
  3: [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
  4: [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
  5: [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
  6: [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
  7: [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
  8: [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
  9: [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
}; //
// const _ = null;
// const initialState = [
//   [2,4,3,9,_,8,_,_,_],
//   [7,9,_,_,4,_,3,_,8],
//   [_,_,5,7,6,_,2,9,_],
//   [_,_,9,8,7,2,4,1,_],
//   [_,_,7,_,_,_,6,_,_],
//   [_,2,1,4,3,6,7,_,_],
//   [_,5,4,_,2,7,8,_,_],
//   [6,_,8,_,9,_,_,2,7],
//   [_,_,_,6,_,5,9,4,3]
// ];
//
// const challengingState = [
//   [1,_,_,_,_,8,_,_,9],
//   [_,_,2,_,_,_,_,_,8],
//   [_,8,_,5,4,9,_,_,_],
//   [_,4,_,2,_,_,9,_,_],
//   [3,_,9,_,_,_,2,_,1],
//   [_,_,1,_,_,5,_,4,_],
//   [_,_,_,9,1,2,_,3,_],
//   [7,_,_,_,_,_,1,_,_],
//   [2,_,_,7,_,_,_,_,6]
// ];
//
// const hardState = [
//   [_,4,_,1,5,_,_,8,3],
//   [_,3,_,_,6,_,5,_,_],
//   [6,_,_,_,_,_,_,_,9],
//   [_,5,_,_,_,_,_,_,_],
//   [1,_,_,7,_,8,_,_,2],
//   [_,_,_,_,_,_,_,6,_],
//   [5,_,_,_,_,_,_,_,4],
//   [_,_,4,_,8,_,_,7,_],
//   [8,6,_,_,2,4,_,9,_]
// ];
//
// const fiendishState = [
//   [_,_,_,5,_,_,_,6,_],
//   [8,_,9,_,_,_,_,1,_],
//   [1,6,_,_,8,7,_,_,_],
//   [3,_,_,_,2,6,_,_,_],
//   [_,_,7,_,1,_,6,_,_],
//   [_,_,_,8,5,_,_,_,3],
//   [_,_,_,4,7,_,_,2,1],
//   [_,4,_,_,_,_,9,_,8],
//   [_,8,_,_,_,3,_,_,_]
// ];
// const solver = new Solver();
// console.log(printState(fiendishState));
// console.log(solve(fiendishState));
// const squareData = [1,2,3,4,5,6,7,8,9].map(square => {
//   return {[square]: solver.getSquareCoords(square)};
// });
// console.log(squareData);
// console.log(JSON.stringify(squareData));
// const sampleState = [
//   [null,null,null,null,null,null,null,null,null],
//   [null,null,null,null,null,null,null,null,null],
//   [null,null,null,null,null,null,null,null,null],
//   [null,null,null,null,null,null,null,null,null],
//   [null,null,null,null,null,null,null,null,null],
//   [null,null,null,null,null,null,null,null,null],
//   [null,null,null,null,null,null,null,null,null],
//   [null,null,null,null,null,null,null,null,null],
//   [null,null,null,null,null,null,null,null,null]
// ];

/***/ })

/******/ });
//# sourceMappingURL=generator.js.map