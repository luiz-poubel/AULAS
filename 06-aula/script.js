var aluno = {
    nome : "Rodolfo",
    anoEscolar : "2",
    turma :"C",
    notas: [6,8,7],
    estudar:function(){
        console.log("Estou estudando")
    }, 

    //metodo com função interna
    media : function(n1,n2,n3){
       return ((n1+n2+n3) / 3)
    },
    //metodo com função externa
    ocorrencias: listaDeOcorrências
}

//acessaas propriedades do objeto aluno
console.log("O aluno", aluno.nome, " esta no ", aluno.anoEscolar, " ano escolar. ")


//executa um método de dentro do objeto
aluno.estudar()



console.log("Média final:"), aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]);


//cria função externa para utlização do objeto
function listaDeOcorrências(){
    console.log("Comeu na biblioteca");
    console.log("xingou no corredor da biblioteca");
    console.log("Não fez o trabalho");
}