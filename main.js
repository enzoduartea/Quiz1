// Função para iniciar o jogo
function startGame() {
	const player1 = document.getElementById('player1_name').value;
	const player2 = document.getElementById('player2_name').value;
	
	if (player1 && player2) {
		document.getElementById('game_div').style.display = 'block';
		document.getElementById('word').innerText = generateRandomWord(); // Função para gerar uma palavra aleatória
	}
}

// Função para verificar a adivinhação
function checkGuess() {
	const guessInput = document.getElementById('guess').value;
	const word = document.getElementById('word').innerText;
	const outputDiv = document.getElementById('output');

	if (guessInput.toLowerCase() === word.toLowerCase()) {
		outputDiv.innerHTML = '<p>Parabéns, você acertou!</p>';
	} else {
		outputDiv.innerHTML = '<p>Tente novamente.</p>';
	}
}

// Função para gerar uma palavra aleatória (substitua isso com uma lista de palavras)
function generateRandomWord() {
	const words = ['maçã', 'banana', 'laranja', 'morango', 'uva'];
	const randomIndex = Math.floor(Math.random() * words.length);
	return words[randomIndex];
}

// Event listener para o botão Verificar
document.getElementById('check_button').addEventListener('click', checkGuess);

// Event listener para iniciar o jogo
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('start_button').addEventListener('click', startGame);
});
