// Vetor = array
var alunos = ["Cristiano", "Neymar", "Messi", "Pelé"]

// Mostra todos os elementos do array
console.log(alunos);

// Mostra uma posição específica do array
console.log(alunos[2]); 

//Troca um valor
alunos[3] = "tirulipa"

//array com valores de vários tipos
var aleatorio = ["Roda Gigante", 8, "friagem", 1.5, 3, false, "Dougras"]

//  Loop para mostrar todos os valores do array
for(var i = 0; i < 7; i++) {
    console.log(aleatorio[i]);
}

for(var i = 0; i < aleatorio.length; i++) {
    console.log(aleatorio[i]);
}

// array de times
var times = ["Barcelona", "Desportiva", "Flamengo", "Toulose"]

// index = numero da caixa no array 
for(var index in times) {
    console.log(index); // mostrar o numero da caixinha que descobriu
    console.log(times[index]); // mostra o valor que tem dentro da caixinha
}