function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
// Creiamo un array di oggetti di squadre:
var listaSquadre = [
  {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
  {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
  {nome: 'Juve', puntiFatti: 0, falliSubiti: 0}
];
// Assegniamo un valore a falliSubiti e puntiFatti tramite la funzione per generare numeri random:
for (var i = 0; i < listaSquadre.length; i++) {
  var squadra = listaSquadre[i]
  squadra.falliSubiti = randomNumber (1, 70);
  squadra.puntiFatti = randomNumber (1, 50)
}

console.log(listaSquadre);

// creare nuovo array di oggetti contenente tutti gli elementi del primo array senza proprietà puntiFatti
var nuoveSquadre = [];

for (var i = 0; i < listaSquadre.length; i++) {
  var vecchiaSquadra = listaSquadre[i]
  nuoveSquadre.push({
    nome: vecchiaSquadra.nome,
    falliSubiti: vecchiaSquadra.falliSubiti,
  })
}

console.log(nuoveSquadre)
