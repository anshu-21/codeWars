/****************
 * 
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 * 
 */

//S1
const order = (words) => {
  const nums = words.match(/[1-9]/g);
  const arr = words.split(" ");
  let res = [];
  if (words.length === 0) return words;

  arr.map((_, i) => {
    const index = nums.indexOf((i + 1).toString());
    res.push(arr[index]);
  });
  return res.join(" ");
};

//S2
function order(words) {
  var array = words.split(" ");
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(" ");
}

//S3
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

//S4
function order(words) {
  return (
    words &&
    words
      .split(" ")
      .map((word) => word.match(/\d/) + word)
      .sort()
      .map((word) => word.slice(1))
      .join(" ")
  );
}
