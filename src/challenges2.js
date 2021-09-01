// Desafio 10
function techList(array, name) {
  const sortedArray = array.sort();
  let arrayList = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortedArray.length; index += 1) {
    let techObject = {
      tech: sortedArray[index],
      name,
    };
    arrayList.push(techObject);
  }
  return arrayList;
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
