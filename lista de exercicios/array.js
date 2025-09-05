//exercicio 1
var cores = ["vermelho", "rosa", "azul"]

console.log(cores);

//exercicio 2
console.log(cores[0])

//exercicio 3
cores.push("verde")
console.log(cores);

//exercicio 4
cores[1] = "roxomaracuja"
console.log(cores);

//exercicio 5
for (let i = 0; i < cores.length; i++) {
  console.log(cores[i]);
}

//exercicio 6
for (const index in cores) {
  console.log(`Cor:${index} ${cores[index]}`);
}

//exercicio 7
var numeros = [2, 4, 6, 8, 10]; 
let soma = 0; 

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; 
}

console.log("A soma dos elementos é: ", soma);