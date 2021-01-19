var listaBici = [
  {nome: 'Graziella', peso: 4},
  {nome: 'Bmx', peso: 6},
  {nome: 'Bmz', peso: 8}
];

var biciMenoPesante = listaBici[0];

for (var i = 1; i < listaBici.length; i++) {
  if (listaBici[i].peso < biciMenoPesante.peso) {
    biciMenoPesante = listaBici[i]
  }
}

console.log(biciMenoPesante);
