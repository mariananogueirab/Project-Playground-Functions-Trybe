// Desafio 1
function compareTrue(value1, value2) {
  if ( value1 === true && value2 === true){
    return true;
  }
   return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray
}

// Desafio 4
function concatName(array) {
  frase = array[array.length -1] + ', ' + array[0];
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsOfWins = wins * 3;
  let pointsOfTies = ties * 1;
  let totalOfPoints = pointsOfWins + pointsOfTies;
  return totalOfPoints
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
