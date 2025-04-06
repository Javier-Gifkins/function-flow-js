// TODO: Write a function 'totalScores' that takes an array of numbers
// TODO: Return the sum of all numbers in the array

function totalScores(scores) {
  sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum;
}

module.exports = { totalScores };
