// var nomes = ["Renan", "joão", "Maria", "Ana", "Pedro", "Lucas", "Fernanda"];
//  nomes.reverse(); // Inverte a ordem dos elementos no array
//  console.log(nomes); // Exibe o array invertido




// maniupulando arrays
 exemplo
 var frutas = ["Maçã","uva", "Pera"];
 console.log(frutas); 

 // push-adciona um valor no fim do array
 frutas.push("Laranja");
 console.log(frutas); 

 //pop - tira o último valor do array e retorna ele
 var frutatirada = frutas.pop();
 console.log(frutatirada); 

//shift - tira o primeiro valor do array e retorna ele
 var primeirafruta = frutas.shift();  
 console.log(primeirafruta);

 //unshift - adiciona um valor ou mais no começo do array
 var novafruta = frutas.unshift("tomate")
    frutas.unshift(novafruta)
    console.log(frutas)