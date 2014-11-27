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

   // Roof Trim part 1
   ctx.fillStyle = "pink";
   ctx.beginPath();
   ctx.moveTo(235, 50);
   ctx.lineTo(270, 95);
   ctx.lineTo(270, 99);
   ctx.lineTo(236, 55);
   ctx.lineTo(235, 50);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Roof Trim part 2
   ctx.fillStyle = "purple";
   ctx.beginPath();
   ctx.moveTo(235, 50);
   ctx.lineTo(200, 115);
   ctx.lineTo(200, 119);
   ctx.lineTo(235, 55);
   ctx.lineTo(235, 50);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Main frame front
   ctx.fillStyle = "gray";
   ctx.beginPath();
   ctx.moveTo(60, 100.33);
   ctx.lineTo(60, 170);
   ctx.lineTo(195, 190);
   ctx.lineTo(195, 118.5);
   ctx.stroke();
   ctx.lineTo(60, 100.33);
   ctx.closePath();
   ctx.fill();

   // Roof Trim part 3
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(200, 115);
   ctx.lineTo(50, 95);
   ctx.lineTo(50, 99);
   ctx.lineTo(200, 119);
   ctx.lineTo(200, 115);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

}
