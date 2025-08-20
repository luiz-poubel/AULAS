//integração com o usuário via prompt
// var nome = prompt("Qual é o seu nome?");

// alert("Seu nome é: " + nome);

//CONDICIONAIS

// SE, SENÃO SE, SENÃO
// IF, IF ELSE, ELSE

// var estaVivo = 7;

// if (estaVivo == true) {
//     console.log("Parabéns, você está vivo");
// }
// else if (estaVivo == false) {
//     console.log("Você está morto");
// }
// else{
//     console.log("Você não tá nada, virou sei lá");
// }

// // ESCOLHA / CASO
// // SWITCH / CASE

// var corcamisa = "Azul";

// switch (corcamisa) {
//     case "Azul":
//         console.log("Você ganhou um voucher");
//         break;

//     case "Amarela":
//         console.log("Você ganhou um body splash");
//         break;

//     case "Vermelha":
//         console.log("Você ganhou um brinde");
//         break;
//         default:
//         console.log("Cor de camisa inválida");
//         break
// }

// var nota = prompt("Qual é a sua nota?");

// if (nota > 6) {
//     console.log("Parabéns, você passou!");
// }
// else if (nota < 5) {
//     console.log("Infelizmente, você reprovou!");
// }
// else{
//     console.log("Surpreendentemente, você está de recuperação!");
// }




var idade1 = prompt("Qual é a sua idade?");
var idade2 = prompt("Qual é a idade do seu amigo?");

var ingresso1, ingresso2;

if (idade1 <= 17){
    ingresso1 = 15
} 
else if( idade1 >= 18 && idade1 < 60){
    ingresso1 = 30
}
else{
    ingresso1 = 20
}

// segundo ingresso

if (idade2 <= 17){
    ingresso2 = 15
} 
else if( idade2 >= 18 && idade2 < 60){
    ingresso2 = 30
}
else{
    ingresso2 = 20
}

var valorfinal = ingresso1 + ingresso2
alert("O valor total dos ingressos é: R$ " + valorfinal);