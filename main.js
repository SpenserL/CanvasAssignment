function createCanvas() {
    var canvas = document.getElementById("house");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        drawHouse(ctx);
    } else {
        alert("Canvas not supported.");
    }
}

function drawHouse(ctx) {

   // Roof part 1
   ctx.fillStyle = "white";
   ctx.beginPath();
   ctx.moveTo(235, 50);
   ctx.lineTo(200, 115);
   ctx.lineTo(50, 95);
   ctx.lineTo(85, 30);
   ctx.lineTo(235, 50);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

}
