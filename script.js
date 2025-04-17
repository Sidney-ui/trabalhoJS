function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        score += 1;
        document.getElementById('feedback').textContent = 'Parabéns! Você acertou! 🎉';
        document.getElementById('score').textContent = `Estrelas: ${score} ⭐`;

        // Verifica se chegou a 10 pontos
        if (score === 10) {
            alert("🎉 Eba! Você chegou a 10 estrelas! Muito bem! 🌟");
            // Você também pode colocar outras ações aqui, tipo reiniciar o jogo ou mostrar mais coisas
        }

    } else {
        document.getElementById('feedback').textContent = `Ops! A resposta era ${correctAnswer}. Tente de novo! 😊`;
    }
    setTimeout(generateQuestion, 2000);
}