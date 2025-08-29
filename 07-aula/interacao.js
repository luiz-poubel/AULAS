function quemMeChamou(individuo){
    console.log(individuo);
    console.log("Class:", individuo.Class)
    console.log("id", individuo.id)
    console.log("Name:", individuo.name);
    console.log("Valor:", individuo.value);
}

function trocaTexto(elementoQueChamou){
    //Nostra o texto fo html que chamou a função

    // console.log(elementoQueChamou);

    // cria uma variavel pra guardar quem ele achar com aquele id
    let textoAntigo = document.getElementById("textoPraTrocar")

   //usa o inneHTML pra substituir o que tava dentro do textoantigo, pro valor que está na caixinha do elemento que chamou a função 
    textoAntigo.innerHTML = elementoQueChamou.value
}
function troca(elementoQueChamou){
    let antigo = document.getElementById("textoOutro")
    antigo.innerHTML= elementoQueChamou.value
}

function corVermelho(elemento){
   elemento.style.color = "red"
   elemento.style.fontSize = "70px"
}
function corAzul(elemento){
elemento.style.color = "blue"
   elemento.style.fontSize = "20px"
}