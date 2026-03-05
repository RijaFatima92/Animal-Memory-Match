$(document).ready(function() {
    const animals = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    let cards = [...animals, ...animals]; 
    let flippedCards = [];
    let moves = 0;
    let matches = 0;
    let timerInterval = null;
    let seconds = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function initGame() {
        shuffle(cards);
        const board = $('#gameBoard');
        cards.forEach(symbol => {
            board.append(`<div class="card" data-symbol="${symbol}">?</div>`);
        });
    }

    function startTimer() {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                seconds++;
                $('#timer').text(seconds);
            }, 1000);
        }
    }

    $('#gameBoard').on('click', '.card', function() {
        let currentCard = $(this);

        if (currentCard.hasClass('flipped') || flippedCards.length === 2) return;

        startTimer();
        
        currentCard.addClass('flipped').text(currentCard.data('symbol'));
        flippedCards.push(currentCard);

        if (flippedCards.length === 2) {
            moves++;
            $('#moves').text(moves);
            checkMatch();
        }
    });

    function checkMatch() {
        let [card1, card2] = flippedCards;

        if (card1.data('symbol') === card2.data('symbol')) {
            card1.addClass('matched');
            card2.addClass('matched');
            flippedCards = [];
            matches++;

            if (matches === animals.length) {
                clearInterval(timerInterval);
                $('#winMessage').fadeIn(); 
            }
        } else {
            setTimeout(() => {
                card1.removeClass('flipped').text('?');
                card2.removeClass('flipped').text('?');
                flippedCards = [];
            }, 1000);
        }
    }

    initGame();
});