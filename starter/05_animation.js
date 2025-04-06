// TODO: Write a function 'move' that simulates a rocket moving back and forth in the console
// TODO: Use 'console.clear()', 'console.log()', and basic logic with position

function move() {
  for (let i = 0; i < 100; i++) {
    console.clear();
    console.log(" ".repeat(i) + "🚀");
    console.log(" ".repeat(100 - i) + "🚀");
  }
}

move();

module.exports = { move };
