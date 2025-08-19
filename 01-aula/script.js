//comentário de uma linha só


/*coomenta
várias 
lihas 
*/

//console.log= escreva do portugol
console.log("Mensagem mídiática") //COmentei ai viu

// cria uma janela de alerta na página
// alert("Mensagem de alertaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

// var cria uma variável na tela
var nome = "Luiz Fenando Poubel";
console.log("O nome é:" + nome);

// cadeia = string
var texto = "Santos Futebol Clube";
console.log (typeof (texto) )

// inteiro = number, int
var numero = 1989;
console.log (typeof (numero) )

//real = number, float
var quebrado = 1.9;
console.log (typeof (numero) )

//lógico = bool
var Vouf = true
console.log (typeof (Vouf) )

//Valor nulo
var nulo = null;
console.log (typeof (nulo) )

//Variável sem valor definido
var indefinido = undefined;
console.log (typeof (indefinido) )

//Operadores Aritméticos
// +,-,*, /, %

var a = 10
var b = 3
console.log("A soma é: " + (a + b));
console.log("A subtração é: " + (a - b));   
console.log("A multiplicação é: " + (a * b));
console.log("A divisão é: " + (a / b));
console.log("A porcentagem é: " + (a % b));    

// Operadores lógicos
// e, ou, nao
// &&, ||, ! = not

var verdade = true;
var mentira = false;
 
// Comparação com E
console.log( verdade && mentira );

// Comparação com OU
console.log( verdade || mentira ); 

// Comparação com Não
console.log( verdade && !mentira );

//Operadores Relacionais
// >, <, >=, <=, ==, !=, ===, !==

var v1 = 7
var v2 = 15
var v3 = "7";

console.log( v1 > v2 );
console.log( v1 < v2 );
console.log( v1 >= v2 );
console.log( v1 <= v2 );
console.log( v1 == v2 );
console.log( v1 != v2 );

console.log( v1 === v3 ); // compara valor e tipo
console.log( v1 == v3 ); // compara apenas o valor
console.log( v1 !== v3 ); // compara valor e tipo

//interação com o usuário via comando prompt
var numero = prompt("Digite um número: ") // Cria uma janela de prompt para o usuário digitar algo
var numero2 = prompt("Digite outro número: ")

var resultado = Number (numero) +  Number (numero2)
    
console.log("O resultado é: " + resultado) 
alert("O resultado é: " + resultado) // Cria uma janela de alerta com o resultado