console.log("oi")

// com array

var alunos = ["Pedro", "Tiago", "João"]
var media = [7,8,6]

console.log("O aluno", alunos[1], "teve média", media[1])


// Com objeto
var estudante = {
    nome : "Cristiano",
    nota1 : 8,
    nota2 : 9,
    media : 8.5
}

console.log(estudante.nome);
console.log(estudante.nota1);
console.log(estudante.nota2);
console.log(estudante.media)
console.log(estudante.nome, "=", estudante.media);

// crie um novo objeto da escola com 4 propriedades

var inscola = {
    mesa : 35,
    cadeira : 35,
    lanche : 2,
    livro :200
}

console.log(inscola.cadeira);
console.log(inscola.lanche);
console.log(inscola.livro);
console.log(inscola.mesa);

//esse aq greg que fez
var intervalo = {
    tempoTotal : "20 min",
    horaInicio : "15h30",
    horaFim : "15h50",
    local : "Pátio",
    dormir : true
}
// Relacionando as duas informações
console.log(intervalo.horaInicio, "até", intervalo.horaFim)

// outra forma de acessar as propriedades
console.log("Onde:", intervalo["local"])


// criando um objeto vazio
var garrafa = {}
console.log(garrafa);

// adicioando novas propriedades em um objeto já existente
garrafa.preco = 430
garrafa.cor = "Amarelo"
garrafa.tamanho = 2.5
garrafa["Validade"] = "1 ano"
 
console.log(garrafa);

//alterando valor de uma propriedade que já existe
garrafa.preco = 429.99
garrafa["Validade"] = "2 ano"
console.log(garrafa);

//criar uma nova propriedade 
var novaPropriedade = "apelido"
garrafa[novaPropriedade] = "Aristóteles"
console.log(garrafa.apelido);

// criar funções
var animal = {
    // variaveis = propriedade+
    nome: "Luke",
    especie: "Lagarto",
    raça: "Adidas",
    //função = método
    andar: function(){
        console.log("Estou andando")
    },
    latir: function(){
        console.log("Estou latindo")
    }
}

console.log("O nome é:", animal.nome)

animal.andar()

animal.latir()