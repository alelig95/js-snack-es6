const listaBici = [
  {nome: 'Graziella', peso: 4},
  {nome: 'Bmx', peso: 6},
  {nome: 'Bmz', peso: 8}
];

let biciMenoPesante = listaBici[0];

for (let i = 0; i < listaBici.length; i++) {
  if (listaBici[i].peso < biciMenoPesante.peso) {
    biciMenoPesante = listaBici[i]
  }
}

const {nome,peso} = biciMenoPesante;

document.getElementById('lista').innerHTML = `
<ul>
<li>Nome: ${nome} </li>
<li>Peso: ${peso} </li>
</ul> `
