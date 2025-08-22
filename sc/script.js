// Saldo inicial
let saldo = 1000;

// Senha correta
const senhaCorreta = "1234";

// Pedir senha ao usuário
let senha = prompt("Digite sua senha:");

// Validar senha
if (senha === senhaCorreta) {
    let continuar = true;

    // Loop principal
    while (continuar) {
        // Menu de opções
        let opcao = prompt(
            "Escolha uma operação:\n1 - Saque\n2 - Depósito\n3 - Sair"
        );

        if (opcao === "1") {
            // Saque
            let valor = Number(prompt("Digite o valor do saque:"));
            if (valor <= saldo) {
                saldo -= valor;
                alert("Saque realizado com sucesso! Saldo atual: " + saldo);
            } else {
                alert("Saldo insuficiente!");
            }

        } else if (opcao === "2") {
            // Depósito
            let valor = Number(prompt("Digite o valor do depósito:"));
            saldo += valor;
            alert("Depósito realizado com sucesso! Saldo atual: " + saldo);

        } else if (opcao === "3") {
            // Encerrar
            alert("Obrigado por usar nosso banco!");
            continuar = false;

        } else {
            alert("Opção inválida! Tente novamente.");
        }

        // Perguntar se quer continuar, só se não tiver saído
        if (continuar) {
            let resposta = prompt("Deseja realizar outra operação? (s/n)");
            if (resposta.toLowerCase() !== "s") {
                continuar = false;
                alert("Sistema finalizado. Saldo final: " + saldo);
            }
        }
    }
} else {
    alert("Senha incorreta! Acesso negado.");
}
