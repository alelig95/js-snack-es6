function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
// Creiamo un array di oggetti di squadre:
const listaSquadre = [
  {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
  {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
  {nome: 'Juve', puntiFatti: 0, falliSubiti: 0}
];
// Assegniamo un valore a falliSubiti e puntiFatti tramite la funzione per generare numeri random:
for (let i = 0; i < listaSquadre.length; i++) {
  let squadra = listaSquadre[i]
  squadra.falliSubiti = randomNumber (1, 70);
  squadra.puntiFatti = randomNumber (1, 50)
}

console.log(listaSquadre);

// creare nuovo array di oggetti contenente tutti gli elementi del primo array senza proprietà puntiFatti:
const nuoveSquadre = [];

for (let i = 0; i < listaSquadre.length; i++) {
  let vecchiaSquadra = listaSquadre[i]

  let {nome, falliSubiti} = vecchiaSquadra;
  nuoveSquadre.push({
    nome,
    falliSubiti,
  });

}

console.log(nuoveSquadre)
