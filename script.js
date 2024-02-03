


    document.addEventListener('DOMContentLoaded', function () {
        const chessboard = document.getElementById('chessboard');
        const pieceNames = [
            '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
                '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
                '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '',
                '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
                '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
        ];

        for (let row = 0; row < 8; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 8; col++) {
                const td = document.createElement('td');
                const isDarkSquare = (row + col) % 2 === 1;
                td.className = isDarkSquare ? 'dark' : 'light';

                const pieceName = pieceNames[row * 8 + col];
                if (pieceName) {
                    const pieceSpan = document.createElement('span');
                    pieceSpan.textContent = pieceName;
                    pieceSpan.className = 'piece';
                    pieceSpan.style.visibility = 'hidden'; // Initially hidden

                    // Add event listener for hover effect
                    td.addEventListener('mouseover', function () {
                        pieceSpan.style.visibility = 'visible';
                    });

                    td.addEventListener('mouseout', function () {
                        pieceSpan.style.visibility = 'hidden';
                    });

                    // Set text color based on square color
                    pieceSpan.style.color = isDarkSquare ? 'white' : 'black';
                    td.appendChild(pieceSpan);
                }

                tr.appendChild(td);
            }
            chessboard.appendChild(tr);
        }
    });
