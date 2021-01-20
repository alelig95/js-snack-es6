function nuovoArray(array, min, max) {
  const newArray = array.filter((element, index) => {
    return index >= min && index <= max;
  });

  return newArray
}

const listaNomi = ['Tommaso', 'Stefania', 'Teresa', 'Andrea', 'Pierpaolo', 'Carlotta'];
console.log(listaNomi);
console.log(nuovoArray(listaNomi, 2, 4));
