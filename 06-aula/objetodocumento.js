// objeto Window = janela do navegador

console.log(window.alert("oi"));

window.prompt("Me diz um nome")

//objeto document = código html do site

console.log(document);
console.log(document.head);
console.log(document.body);

//acessando elementos do html
//Por tag, class e id

// busca elementos pela mesma tag 
var titulos = document.getElementsByTagName("h1")

console.log(titulos)

//busca elementos pela mesma class
var paragrafos = document.getElementsByClassName("para")

console.log(paragrafos);

//busca elemento pelo ID
var achado = document.getElementById("p3")
console.log(achado)

// modificando elemento da lista de achados pela tag
titulos[1].style.color = "green"
titulos[2].style.backgroundColor = "pink"

// modificando elemento da lista de achados pela class
paragrafos[0].style.fontSize = "45px"
paragrafos[0].style.fontWeight = "bold"

// modificando elemento achado pelo id

//trocando o texto do elemento
achado.innerText = "tauba"

// trocando o html do elemento
achado.innerHTML = "<h2> Novo texto </h2>"

// criar uma função para ser ativada

function cliquei(){
console.log("Parabéns, ganhou 1K reais");
console.log("Só que do banco imobiliário");


}