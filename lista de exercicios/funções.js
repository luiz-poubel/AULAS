//exercicio 1
function boasVindas(){
    console.log("Bem vindo(a) ao curso de JavaScript!");

}
boasVindas()

//exercicio 2 
function saudar(){
    var nome = prompt("Por favor digite seu nome ")
    console.log("Olá,", nome)
}
saudar()

//exercicio 3
function dobrou(){
    var numero = (Number (prompt("Digite um número")))
    var dobro = (numero * 2)

    var resultado = prompt ("o resultado é", dobro)
}
dobrou()

 // exercicio 4
function somou(){
    var numero1 = (Number (prompt("Digite um número")))
    var numero2 = (Number (prompt("Digite um outro número")))
    var soma = (numero1 + numero2)

    var resultado = prompt ("o resultado da sua soma é", soma)
}
somou()

// //exercicio 5
var par []
var par2 []
par = (Number (prompt("Digite um número")))
par2 = (Number (prompt("Digite um segundo número")))
function media(par, par2){
   mediazona = (par + par2) / 2
   console.log("A média dos seus números é:", mediazona);
   
}

//exercicio 6
function descricaoPessoa(){
var pombo = {
    nome : "pablo",
    idade : 47
}
console.log(pombo.nome, "tem", pombo.idade );
}

   
//exercicio 7

function calculo(){
    var numero1 = (Number (prompt("Digite um número")))
    var numero2 = (Number (prompt("Digite um outro número")))
    var mult = (numero1 * numero2)

    console.log("O resultado da sua multiplicação foi", mult);
    
}

    

