/************************
 * 
 * Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 * 
 */

//S1
function getCount(str) {
  let vowelsCount = Array.from(str).filter((el) =>
    ["a", "e", "i", "o", "u"].includes(el)
  ).length;

  return vowelsCount;
}

//S2
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

//S3
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

//S4
function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}
