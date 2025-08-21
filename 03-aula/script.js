console.log("Vamo que vamo!");

// laços de repetição
// PARA = FOR 
// for( var i = 0; i < 5; i++ ) {
//     console.log("Ainda estoy ahí");

//     console.log("Ainda estoy aqui");
// }

// console.log("Acabou de repetir");

// enquanto = while
// while(contagem < 5 ){

//     console.log("Ainda estoy ahí");
//     contagem++;
// }



// exercio1
//  var ne =prompt("Digite um número para repetir: ");
//  for( var i = 0; i <= ne; i++ ) {
//     console.log(i);
// }
//     console.log("fim");



// // exercio2
// var senha1 = prompt("Digite a senha:  dica( sua senha é 12345678)");
// var senhaserta = 2444666668888888;
//  for( var i = 0; senha1 != senhaserta; ) {
//   if (senha1 == senhaserta) {
//         alert("Senha correta!");
//         break;
//      } 
//      else {
//          alert("Senha incorreta, tente novamente, fracassado!");
//          senha1 = prompt("Digite a senha: ");
//      }
// }


//Funções

//cria a função
// function bemvindo(){
// var nome = prompt("Digite seu nome: ");
// console.log("Seja bem vindo, " + nome);
// }
// //chama a função
// bemvindo();


// function calcularidade(idade){
//     alert("Sua idade é: ", idade); 
// }

// calcularidade(18);
// calcularidade(100);

exercio3
function maior(valor1, valor2){
    if (valor1> valor2) {
        console.log("O maior valor é o primeiro.");
    }
    else if (valor2 > valor1) {
        console.log("O maior valor é o segundo.");
}
else{
    console.log("Os valores são iguais.");
    }
}

var numero1 = prompt("Digite o primeiro valor: ");
var numero2 = prompt("Digite o segundo valor: ");

maior(Number(numero1), Number(numero2));    

talvezalternativo
// var valor1 =prompt("Digite o primeiro valor: ");
// var valor2 =prompt("Digite o segundo valor: ");
// function verificar(){

//     if (valor1 > valor2) {
//         alert("O primeiro valor é maior que o segundo.");
//     } else if (valor1 < valor2) {
//         alert("O segundo valor é maior que o primeiro.");
//     } else {
//         alert("Os valores são iguais.");
//     }
// }
// verificar();
//     verificar(valor1, valor2);

//funções com retorno
function soma(valor1, valor2){
    let resultado = valor1 + valor2;
    
    return resultado;
}
var valorsomado = soma(7, 6);
console.log("O resultado da soma é: ", valorsomado);


