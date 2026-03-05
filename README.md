# Animal-Memory-Match
Description:
A classic memory matching game built to practice dynamic DOM manipulation and state management using jQuery. The game features a shuffled grid of animal emojis, a move counter, a live timer, and interactive sound effects.

Key Features:

🔀 Fisher-Yates Shuffle: Randomizes card positions on every reset.

⏱️ Game Tracking: Real-time move counter and seconds timer.

🔊 Audio Integration: Online-hosted sound effects for matches and mismatches.

📱 Responsive Grid: Built with CSS Flexbox for a clean layout.

Tech Stack: HTML5, CSS3, JavaScript, jQuery.

Technical Breakdown:

DOM Manipulation: Leveraged jQuery's .append() and .addClass() to manage the game board and card states dynamically.

Logic Flow:

Initialization: Shuffles an array of 8 animal pairs.

Event Handling: Uses a single jQuery event listener on the parent container (event delegation) to manage card clicks.

Validation: Compares the data-symbol attributes of the two selected cards.

Reset Mechanism: If no match is found, a setTimeout function flips the cards back after 1000ms.

UI/UX: Implemented a move counter and a win message using .fadeIn() for a smooth user experience.
