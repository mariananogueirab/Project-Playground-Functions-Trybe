// Desafio 10
function techList(technologies, name) {
  let technologiesSort = technologies.sort();
  let techObjects = [];
  if (technologies.length !== 0) {
    for (let index = 0; index < technologiesSort.length; index += 1) {
      techObjects[index] = {
        'tech': technologiesSort[index],
        'name': name,
      };
    }
    return techObjects;
  }
    return 'Vazio!';
}

// Desafio 11
function checkNumber(phone) {
  let count = 0;
  for (let index = 0; index < phone.length; index +=1 ) {
    for (let key in phone) {
        if (phone[key] === phone[index]) {
          count += 1;
          if (count === 3 || count > 3) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
    }
    count = 0;
    if (phone[index] < 0 || phone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return 'Ok'
}

function generatePhoneNumber(phone) {
  let check = checkNumber(phone);
  let ddd = '';
  let phone1 = '';
  let phone2 = '';
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else if (check === 'Ok') {
    for (let index = 0; index < 2; index += 1) {
      ddd = ddd + phone[index];
    }
    for (let index1 = 2; index1 < 7; index1 += 1) {
      phone1 = phone1 + phone[index1];
    }
    for (let index2 = 7; index2 < phone.length; index2 += 1) {
      phone2 = phone2 + phone[index2];
    }
    return '(' + ddd + ') ' + phone1 + '-' + phone2;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultA = false;
  let resultB = false;
  let resultC = false;
  if (lineA  < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    resultA = true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    resultB = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    resultC = true;
  }
  if (resultA === resultB === resultC === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(frase) {
  let numberOfDrinks = frase.match(/[0-9]/g);
  let totalOfDrinks = 0;
  for (let index = 0; index < numberOfDrinks.length; index +=1) {
    totalOfDrinks = totalOfDrinks + parseInt(numberOfDrinks[index]);
  }
  if (totalOfDrinks > 1) {
    return totalOfDrinks + ' copos de água';
  } else {
    return totalOfDrinks + ' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
