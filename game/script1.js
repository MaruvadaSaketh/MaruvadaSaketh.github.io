document.addEventListener('DOMContentLoaded', function() {
    const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
    let flippedCards = [];
    let matchedCards = [];

    // Shuffle the cards
    cards.sort(() => Math.random() - 0.5);

    const gameContainer = document.getElementById('game-container');

    // Create the game board
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.dataset.cardValue = cards[i];
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    }

    // Card flip function
    function flipCard() {
        if (flippedCards.length < 2) {
            const card = this;
            card.innerHTML = card.dataset.cardValue;
            card.classList.add('flipped');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    // Check if the flipped cards match
    function checkMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.cardValue === card2.dataset.cardValue) {
            card1.removeEventListener('click', flipCard);
            card2.removeEventListener('click', flipCard);
            matchedCards.push(card1, card2);
            if (matchedCards.length === cards.length) {
                alert('Congratulations! You won!');
            }
        } else {
            card1.innerHTML = '';
            card2.innerHTML = '';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }
        flippedCards = [];
    }
});