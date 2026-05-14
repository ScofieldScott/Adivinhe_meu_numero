'use strict';

// Texto da pagina

document.querySelector('.title').textContent = 'Adivinhe meu número!';

document.querySelector('.between').textContent = '(Entre 1 e 20)';

document.querySelector('.again').textContent = 'Again';

document.querySelector('.number').textContent = '?';

document.querySelector('.check').textContent = 'Check!';

document.querySelector('.message').textContent = 'Comece a adivinhar...';

// Lógica do jogo
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Sem número!';

    // Quando o jogador vence
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Número Correto!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.with = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Quando o jogador adivinha errado
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Chutou alto!' : '📉 Chutou baixo!';
      score--;

      document.querySelector('.score').textContent = score;

      //Quando o jogador perde
    } else {
      document.querySelector('.message').textContent = '💥 Você perdeu!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Comece a adivinhar...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.with = '15rem';
});
