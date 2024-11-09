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

    for (let rodada = 1; rodada <= totalTentativas; rodada++) {
        console.log(`Tentativa ${rodada} de ${totalTentativas}`);
        const chuteStr = prompt("Digite o seu número de 1 a 100: ");
        console.log("Você digitou", chuteStr);
        const chute = parseInt(chuteStr);

        if (chute < 1 || chute > 100) {
          console.log("Você deve digitar um número entre 1 e 100!");
          continue;
        }
    
        const acertou = chute === numeroSecreto;
        const maior = chute > numeroSecreto;
        const menor = chute < numeroSecreto;
    
        if (acertou) {
          console.log("Você acertou!");
          break;
        } else {
          if (maior) {
            console.log("Você errou! O seu chute foi maior que o número secreto.");
          } else if (menor) {
            console.log("Você errou! O seu chute foi menor que o número secreto.");
          }
          const pontosPerdidos = Math.abs(numeroSecreto - chute);
          pontos -= pontosPerdidos;
    }
      
    
      console.log("Fim do jogo.");
}
    
    jogar();