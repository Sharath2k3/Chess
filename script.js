document.addEventListener('DOMContentLoaded', function () {
    var cells = document.querySelectorAll('.chess-board td');
    
    cells.forEach(function (cell) {
        cell.addEventListener('mouseenter', function () {
            var piece = this.querySelector('.chess-piece');
            piece.style.display = 'block';
            setTimeout(function () {
                piece.style.display = 'none';
            }, 10000);
        });
    });
});