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

function highestNumber(numbers) {
  let biggerNumber = numbers[0];
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggerNumber) {
      biggerNumber = numbers[index];
    }
  }
  return biggerNumber
}

function highestCount(numbers) {
  let biggerNumber = highestNumber(numbers);
  let count = 0;
  for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] === biggerNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge'
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
