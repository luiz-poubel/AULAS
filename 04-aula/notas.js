//Arrays para guardar as informações
var alunos =[]
var notasA = []
var notasB = []

//guardar as informações vindas do usuário
function cadastro(){
    for(var i = 0; i < 3; i++){
        alunos[i] = prompt("Digite o nome do aluno: ")
        notasA[i] = Number(prompt("Digite a primeira nota: "))
        notasB[i] = Number(prompt("Digite a segunda nota: "))
    }

}
 
// Calcular média
function media(nota1, nota2){
   let mediaCalculada = ((nota1 * 0.4) + (nota2 * 0.6))
   return mediaCalculada
}

// aprovado media => 7, recuperação media < 7 e >=, reprovado media < 5 
function situacao(mediafinal){
    if (mediafinal >= 7) {
        return "aprovado"
    } 
    else if (mediafinal < 7 && mediafinal >= 5)  {
        return "recuperação"
    } 
    else{
        return "reprovado, fracassado"
    }

}

// Função que mostra os resutados
function mostraResultados(){
    for(var index in alunos){
        let notapri = notasA[index] // pega a primeira nota e guarda, vinda do array notasA
        let notaSeg = notasB[index] // pega a segunda nota e guarda, vinda do array notasB
        let mediaatual = media(notapri, notaSeg) //Manda as notas pra funcao de media
        let status = situacao(mediaatual) // Descobre a situacao de acordo com a media
        console.log("O aluno ", alunos[index], "teve média de:", mediaatual);
        console.log("O status dele é de: ", status);
    }

}

cadastro()
mostraResultados()
