var carro = {}
console.log(carro);

carro.marca = "Chevrolet"
carro.modelo = "Corvette"
carro.ano = 2025



//EX2
var carro = {}
console.log(carro);

carro.marca = "Chevrolet"
carro.modelo = "Corvette"
carro.ano = 2023

console.log(carro);

console.log(carro.marca);

carro.ano = 2025
carro.cor = "rosa"


// EX3

var pessoas = {
  nome: "renan",
  idade: "28",
    apresentar: function(){
        console.log("Olá, meu nome é", pessoas.nome, "e tenho", pessoas.idade, "anos");       
    }
}
pessoas.apresentar()
