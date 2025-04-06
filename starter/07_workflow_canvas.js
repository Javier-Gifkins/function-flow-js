// TODO: In the browser, create a canvas to visualize function steps
// TODO: Write 'drawFlowStep' to display a step
// TODO: Write 'animateFlow' to loop through steps and call drawFlowStep

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const steps = ["Start", "Process", "Decision", "Action", "End"];

function drawFlowStep(step) {
  const x = canvas.width / 2;
  const y = 100 + step * 100;  // Space steps vertically
  
  ctx.fillStyle = "#4CAF50";  // Green background
  ctx.strokeStyle = "#2E7D32";  // Darker green border
  
  // Draw box around text
  ctx.beginPath();
  ctx.roundRect(x - 80, y - 30, 160, 60, 10);
  ctx.fill();
  ctx.stroke();
  
  // Draw text
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(steps[step], x, y);
  
  // Draw connecting lines between boxes
  if (step > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y - 30);
    ctx.lineTo(x, y - 70);
    ctx.stroke();
  }
}

function animateFlow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < steps.length; i++) {
    drawFlowStep(i);
  }
}

animateFlow();

module.exports = { animateFlow };
