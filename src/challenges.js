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
    switch (frase[key]) {
    case 'a':
      fraseEncode += 1;
      break;
    case 'e':
      fraseEncode += 2;
      break;
    case 'i':
      fraseEncode += 3;
      break;
    case 'o':
      fraseEncode += 4;
      break;
    case 'u':
      fraseEncode += 5;
      break;
    default:
      fraseEncode += frase[key];
    }
  }
  return fraseEncode;
}

function decode(frase) {
  let fraseDecode = '';
  for (let key in frase) {
    switch (frase[key]) {
    case '1':
      fraseDecode += 'a';
      break;
    case '2':
      fraseDecode += 'e';
      break;
    case '3':
      fraseDecode += 'i';
      break;
    case '4':
      fraseDecode += 'o';
      break;
    case '5':
      fraseDecode += 'u';
      break;
    default:
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
