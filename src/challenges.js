// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(string) {
  let arrayStrings = [];
  arrayStrings.push(string[string.length - 1]);
  arrayStrings.push(string[0]);
  let concatStrings = arrayStrings.join(', ');
  return concatStrings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let totalPoints = winPoints + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = Math.max(...array);
  let numberOfCounting = 0;
  for (let index in array) {
    if (array[index] === highestNumber) {
      numberOfCounting += 1;
    }
  }
  return numberOfCounting;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
