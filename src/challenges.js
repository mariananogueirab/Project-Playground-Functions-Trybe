// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
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
  return sentenceArray;
}

// Desafio 4
function concatName(array) {
  let virgula = ', ';
  let frase = array[array.length - 1].concat(virgula, array[0]);
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsOfWins = wins * 3;
  let pointsOfTies = ties * 1;
  let totalOfPoints = pointsOfWins + pointsOfTies;
  return totalOfPoints;
}

// Desafio 6

function highestNumber(numbers) {
  let biggerNumber = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggerNumber) {
      biggerNumber = numbers[index];
    }
  }
  return biggerNumber;
}

function highestCount(numbers) {
  let biggerNumber = highestNumber(numbers);
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
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
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzFinal = [];
  for (let key in numbers) {
    if (numbers[key] % 3 === 0 && numbers[key] % 5 !== 0) {
      fizzBuzzFinal[key] = 'fizz';
    } else if (numbers[key] % 3 !== 0 && numbers[key] % 5 === 0) {
      fizzBuzzFinal[key] = 'buzz';
    } else if (numbers[key] % 3 === 0 && numbers[key] % 5 === 0) {
      fizzBuzzFinal[key] = 'fizzBuzz';
    } else {
      fizzBuzzFinal[key] = 'bug!';
    }
  }
  return fizzBuzzFinal;
}

// Desafio 9
function encode(frase) {
  let fraseEncode = '';
  for (let key in frase) {
    if (frase[key] === 'a') {
      fraseEncode += 1;
    } else if (frase[key] === 'e') {
      fraseEncode += 2;
    } else if (frase[key] === 'i') {
      fraseEncode += 3;
    } else if (frase[key] === 'o') {
      fraseEncode += 4;
    } else if (frase[key] === 'u') {
      fraseEncode += 5;
    } else {
      fraseEncode += frase[key];
    }
  }
  return fraseEncode;
}

function decode(frase) {
  let fraseDecode = '';
  for (let key in frase) {
    if (frase[key] === '1') {
      fraseDecode += 'a';
    } else if (frase[key] === '2') {
      fraseDecode += 'e';
    } else if (frase[key] === '3') {
      fraseDecode += 'i';
    } else if (frase[key] === '4') {
      fraseDecode += 'o';
    } else if (frase[key] === '5') {
      fraseDecode += 'u';
    } else {
      fraseDecode += frase[key];
    }
  }
  return fraseDecode;
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
