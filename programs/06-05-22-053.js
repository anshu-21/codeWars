/***************************
 * 
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
 * 
 */

//S1
function sumTwoSmallestNumbers(numbers) {
  const sortedArr = numbers.sort((a, b) => a - b);

  return sortedArr[0] + sortedArr[1];
}

//S2
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

//S3
const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);