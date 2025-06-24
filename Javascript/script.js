let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let input = document.getElementById("guessInput");
  let message = document.getElementById("message");
  let guess = Number(input.value);

  attempts++;

  if (guess === secretNumber) {
    message.textContent = "🎉 You guessed it right!";
    resetGame();
  } else if (guess < secretNumber) {
    message.textContent = "Too low!";
  } else {
    message.textContent = "Too high!";
  }

  if (attempts >= 5 && guess !== secretNumber) {
    message.textContent = "❌ Out of attempts! The number was " + secretNumber;
    resetGame();
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
}
