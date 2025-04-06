// TODO: Write a function 'move' that simulates a rocket moving back and forth in the console
// TODO: Use 'console.clear()', 'console.log()', and basic logic with position

function move() {
  let time = 0;
  setInterval(() => {
    console.clear();
    console.log(" ".repeat(Math.sin(time / 10) * 30 + 30) + "🚀")
    time++;
  }, 100);
}

module.exports = { move };
