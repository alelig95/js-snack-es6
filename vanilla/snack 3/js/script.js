function nuovoArray(array, min, max) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if((i >= min) && (i <= max)) {
      newArray.push(array[i])
    }
  }
    return newArray
}
var listaNomi = ['Tommaso', 'Stefania', 'Teresa', 'Andrea', 'Pierpaolo', 'Carlotta'];
console.log(listaNomi);
console.log(nuovoArray(listaNomi, 2, 4));
