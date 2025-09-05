//exercicio 1
var pessoa = {}
console.log(pessoa);

pessoa.nome = "renan"
pessoa.idade = 47
console.log(pessoa)

//exercicio 2 
console.log(pessoa.nome);

//exercicio 3 
pessoa.nome = "Gabriel"
console.log(pessoa);

//exercicio 4 
pessoa.cidade = "Manhuaçu"
console.log(pessoa);

//exercicio 5
pessoa.apresentar = function(){
 console.log("Olá, meu nome é", pessoa.nome,"e tenho", pessoa.idade, "anos.");
}
pessoa.apresentar()

//exercicio 6
var alunos = ["daniel", "erick", "luiz"]
var media = [2,4,4]

console.log("O aluno", alunos[0], "teve média", media[0])
console.log("O aluno", alunos[1], "teve média", media[1])
console.log("O aluno", alunos[2], "teve média", media[2])


