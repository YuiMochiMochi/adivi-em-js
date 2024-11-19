const readline = require("readline");

function jogar() {
  console.log("Bem vindo ao jogo de Adivinhação!");

  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let totalDeTentativas = 0;
  let pontos = 1000;

  console.log("Qual nível de dificuldade?");
  console.log("(1) Fácil (2) Médio (3) Difícil");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Defina o nível: ", (nivelStr) => {
    const nivel = parseInt(nivelStr);

    if (nivel === 1) {
      totalDeTentativas = 20;
    } else if (nivel === 2) {
      totalDeTentativas = 10;
    } else {
      totalDeTentativas = 5;
    }

    let rodada = 1;

    const perguntarChute = () => {
      if (rodada > totalDeTentativas) {
        console.log("Fim do jogo. O número secreto era:", numeroSecreto);
        rl.close();
        return;
      }

      console.log(`Tentativa ${rodada} de ${totalDeTentativas}`);
      rl.question("Digite o seu número de 1 a 100: ", (chuteStr) => {
        const chute = parseInt(chuteStr);

        if (chute < 1 || chute > 100) {
          console.log("Você deve digitar um número entre 1 e 100!");
          perguntarChute();
          return;
        }

        if (chute === numeroSecreto) {
          console.log(`Você acertou! Sua pontuação foi: ${pontos}`);
          rl.close();
        } else {
          if (chute > numeroSecreto) {
            console.log("Você errou! O seu chute foi maior que o número secreto.");
          } else {
            console.log("Você errou! O seu chute foi menor que o número secreto.");
          }
          const pontosPerdidos = Math.abs(numeroSecreto - chute);
          pontos -= pontosPerdidos;
          rodada++;
          perguntarChute();
        }
      });
    };

    perguntarChute();
  });
}

jogar();
