var canvas;
var ctx;

function createCanvas() {
   ctx = document.getElementById('house').getContext('2d');
   var cW = ctx.canvas.width,
        cH = ctx.canvas.height;
   var smokes = [];

   function addSmoke() {
      var x = 195 - Math.floor(Math.random() * 10) + 1;
      var y = 53;
      var s = Math.floor(Math.random() * 3) + 1;
      var v = Math.floor(Math.random() * 5);
      smokes.push({
         "x": x,
         "y": y,
         "s": s,
         "v": v,
      });
   }

   function createSmoke() {
      addSmoke();
      addSmoke();
      for (var i = 0; i < smokes.length; i++) {
         ctx.fillStyle = "rgba(0,0,0,.1)";
         ctx.beginPath();
         ctx.arc(smokes[i].x, smokes[i].y -= smokes[i].s * .5, smokes[i].v, 0, Math.PI * 2, false);
         ctx.fill();
         if (smokes[i].y < -5) {
            smokes.splice(i, 1);
         }
      }
   }

   function animate() {
      ctx.save();
      ctx.clearRect(0, 0, cW, cH);

      drawHouse();
      createSmoke();
      ctx.restore();
   }

   var animateInterval = setInterval(animate, 30);

   var clicks = 0;
   ctx.canvas.addEventListener('click', function(event) {
      clicks++;

      if (clicks % 2 == 0) {
         createCanvas();
      } else {
         clearInterval(animateInterval);
      }

   });
}
window.addEventListener('load', function(event) {
    createCanvas();
});

function drawHouse() {
    // transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans)
    // ctx.setTransform(1, 0, 0, 1, 0, 0);

    // BG
    ctx.fillStyle = "lightskyblue";
    ctx.fillRect(0, 0, 300, 160);
    ctx.fillStyle = "darkolivegreen";
    ctx.fillRect(0, 160, 300, 140);

    // Front of chimney
    ctx.fillStyle = "#861A1A";
    ctx.transform(1, 0.08, 0, 1, 0, 30);
    ctx.fillRect(183, 10, 10, 20);
    ctx.strokeRect(183, 10, 10, 20);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Side of chimney
    ctx.fillStyle = "firebrick";
    ctx.transform(1, -0.08, 0, 1, 0, 30);
    ctx.fillRect(193, 41, 8, 20);
    ctx.strokeRect(193, 41, 8, 20);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Top of chimney
    ctx.fillStyle = "firebrick";
    ctx.transform(1, 0, 7.5, 1, 182, 53);
    ctx.fillRect(0, 0, 8, 1.5);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Front house frame
    ctx.fillStyle = "#0A1E3F";
    ctx.transform(1, 0.15, 0, 1, 0, 30);
    ctx.fillRect(40, 85, 150, 80);
    ctx.strokeRect(40, 85, 150, 80);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Right house frame
    ctx.fillStyle = "#113268";
    ctx.transform(1, -0.3, 0, 1, 0, 116);
    ctx.fillRect(190, 85, 74, 80);
    ctx.strokeRect(190, 85, 74, 80);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Door
    ctx.fillStyle = "lightgray";
    ctx.transform(1, 0.15, 0, 1, 0, 0)
    ctx.fillRect(55, 145, 25, 50);
    ctx.strokeRect(55, 145, 25, 50);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Front Window left-most
    ctx.fillStyle = "lightcyan";
    ctx.transform(1, 0.15, 0, 1, 0, 0)
    ctx.fillRect(90, 145, 25, 25);
    ctx.strokeRect(90, 145, 25, 25);
    ctx.beginPath();
    ctx.moveTo(90, 157.5);
    ctx.lineTo(115, 157.5);
    ctx.stroke();
    // Front Window center
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "lightcyan";
    ctx.transform(1, 0.15, 0, 1, 0, 0)
    ctx.fillRect(125, 145, 25, 25);
    ctx.strokeRect(125, 145, 25, 25);
    ctx.beginPath();
    ctx.moveTo(125, 157.5);
    ctx.lineTo(150, 157.5);
    ctx.stroke();
    // Front roof
    ctx.setTransform(1, 0, 0, 1, 0, 30);
    ctx.fillStyle = "#2B1500";
    ctx.beginPath();
    ctx.moveTo(25, 95);
    ctx.lineTo(85, 35);
    ctx.lineTo(205, 46);
    ctx.lineTo(193, 120);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Right side roof
    ctx.fillStyle = "#3E1F00";
    ctx.beginPath();
    ctx.moveTo(193, 120);
    ctx.lineTo(275, 100);
    ctx.lineTo(205, 46);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Shadow
    ctx.fillStyle = "rgba(30, 30, 30, 0.3)";
    ctx.transform(1, 0.15, -3, 1, 547, -2);
    // ctx.rotate(0.15);
    ctx.fillRect(69, 192, 153, 100);

    ctx.setTransform(1, 0, -0.2, 1, 10, 0);
}