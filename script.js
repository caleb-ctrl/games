window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let xPos = 230;
    let yPos = 230;
    const playerSize = 40;
    const step = 20;

    // Draw player
    function drawPlayer() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        ctx.fillStyle = '#FF0000'; // Player color
        ctx.fillRect(xPos, yPos, playerSize, playerSize); // Draw player
    }

    // Movement with arrow keys
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp' && yPos - step >= 0) yPos -= step;
        else if (e.key === 'ArrowDown' && yPos + step <= canvas.height - playerSize) yPos += step;
        else if (e.key === 'ArrowLeft' && xPos - step >= 0) xPos -= step;
        else if (e.key === 'ArrowRight' && xPos + step <= canvas.width - playerSize) xPos += step;

        drawPlayer();
    });

    // Initial player drawing
    drawPlayer();
}
