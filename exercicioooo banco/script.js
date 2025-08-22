 var senha1 = prompt("Digite a senha: ");
 var senhaserta = 7070;
 var saldo = (Number(2000000)); 
   if (senha1 == senhaserta) {
           alert("Senha correta!");
         } 
      else {
          alert("Senha incorreta, você não pode sacar ou depositar nada.");
            senha1 = prompt("Digite a senha: ");
  }

var Operadores = prompt("Qual operação você deseja realizar? Digite 1 para sacar ou 2 para depositar: ");
switch (Operadores) {
    case "1":
        var saque = Number(prompt("Digite o valor que deseja sacar: "));
        var retirar = (Number(saldo) - Number(saque));
        if (saque <= saldo) 
            { 
            alert("Saque realizado com sucesso! Seu novo saldo é: " + retirar);
        } else {
            alert("Saldo insuficiente para realizar o saque.");
        }
          alert("Deseja fazer outra operação? Digite 'sim' para continuar ou 'não' para sair.");
    var continuar = prompt("Digite 'sim' ou 'não': ");
    if(continuar === "sim"){
        Operadores = prompt("Qual operação você deseja realizar? Digite 1 para sacar ou 2 para depositar: ")
  }
  else{
    alert("Obrigado por usar nosso sistema. Até logo!");
  }
    case "2":
        var deposito = Number(prompt("Digite o valor que deseja depositar: "));
        var valordep = (Number (saldo) + Number(deposito));  
        if (deposito > 0)  
            {
            alert("Depósito realizado com sucesso! Seu novo saldo é: "+ valordep);
        } 
        else{
            alert("Saldo insuficiente para realizar o depósito.");
        }
    }

    alert("Deseja fazer outra operação? Digite 'sim' para continuar ou 'não' para sair.");
    var continuar = prompt("Digite 'sim' ou 'não': ");
    if(continuar === "sim"){
        Operadores = prompt("Qual operação você deseja realizar? Digite 1 para sacar ou 2 para depositar: ")
  }
  else{
    alert("Obrigado por usar nosso sistema. Até logo!");
  }