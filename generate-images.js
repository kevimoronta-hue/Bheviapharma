const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'assets', 'images', 'scores');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto('http://localhost:3333/ressources.html', { waitUntil: 'networkidle0' });
  await page.evaluateHandle(() => document.fonts.ready);

  for (let i = 0; i <= 10; i++) {
    const base64Data = await page.evaluate(async (targetScore) => {
      return new Promise((resolve) => {
        const cvs = document.createElement("canvas");
        cvs.width = 1200;
        cvs.height = 630;
        const ctx = cvs.getContext("2d");
        
        const tier =
          targetScore <= 3 ? "Débutant" :
          targetScore <= 6 ? "Bon niveau" :
          targetScore <= 8 ? "Œil affûté" : "Expert";
          
        const bg = ctx.createLinearGradient(0, 0, 0, 630);
        bg.addColorStop(0, "#F5F5F4");
        bg.addColorStop(1, "#E7E5E4");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 1200, 630);

        ctx.fillStyle = "#1B2B5E";
        ctx.font = "bold 48px Manrope";
        ctx.textAlign = "center";
        ctx.fillText("JEU COMPTOIR BHEVIA : QUELLE COULEUR ?", 600, 100);

        ctx.fillStyle = "#0C0A09";
        ctx.font = "800 110px Manrope";
        ctx.fillText(targetScore + " / 10", 600, 260);

        function drawMedal(cx, cy) {
          ctx.beginPath();
          ctx.arc(cx, cy, 60, 0, 2 * Math.PI);
          ctx.fillStyle = "#F5A623";
          ctx.fill();
          ctx.lineWidth = 4;
          ctx.strokeStyle = "#FFFFFF";
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(cx - 30, cy + 45);
          ctx.lineTo(cx - 40, cy + 120);
          ctx.lineTo(cx, cy + 90);
          ctx.lineTo(cx + 40, cy + 120);
          ctx.lineTo(cx + 30, cy + 45);
          ctx.fillStyle = "#E63946";
          ctx.fill();

          ctx.fillStyle = "#FFF";
          ctx.font = "bold 36px Manrope";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("★", cx, cy);
        }

        function wrapCanvasText(text, x, y, maxWidth, lineHeight) {
          const words = text.split(" ");
          let line = "";
          let currentY = y;
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
              ctx.fillText(line, x, currentY);
              line = words[n] + " ";
              currentY += lineHeight;
            } else {
              line = testLine;
            }
          }
          ctx.fillText(line, x, currentY);
        }

        ctx.textBaseline = "alphabetic";
        drawMedal(600, 390);

        ctx.fillStyle = "#0C0A09";
        ctx.font = "bold 38px Manrope";
        wrapCanvasText("Niveau : " + tier, 600, 520, 1000, 48);

        resolve(cvs.toDataURL("image/png"));
      });
    }, i);

    const base64Content = base64Data.replace(/^data:image\/png;base64,/, "");
    const filename = path.join(outDir, i + '.png');
    fs.writeFileSync(filename, base64Content, 'base64');
    console.log("Saved " + filename);
  }

  await browser.close();
})();
