function jogar() {
    console.log("Bem vindo ao ogo de adivinhação!");

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let totalTentativas = 0;
    let pontos = 1000;

    console.log("Qual nível de dificuldade?");
    console.log("(1) Fácil (2) Médio (3) Difícil");

    const nivel = parseInt(prompt("Define o nível: "));

    if (nivel == 1) {
        totalTentativas = 20;
    } else if (nivel == 2) {
        totalTentativas = 10;
    } else {
        totalTentativas = 5;
    }

    
      
    
      console.log("Fim do jogo.");
    }
    
    jogar();