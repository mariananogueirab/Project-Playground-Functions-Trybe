// Desafio 10
function techList(technologies, name) {
  let technologiesSort = technologies.sort();
  let techObjects = [];
  if (technologies.length !== 0) {  
    for (let index = 0; index < technologiesSort.length; index += 1) {
    techObjects[index] = {
      tech: technologiesSort[index],
      name: name
    };
  }
  return techObjects;
} else {
  return 'Vazio!';
}
}


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
