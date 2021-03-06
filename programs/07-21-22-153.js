/****************
 * 
 * Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
 * 
 */

//S1
const diamond = (n) => {
  if (n < 0 || n % 2 === 0) return null;

  let bottom = "";
  let bottomCounter = 0;
  for (let i = n; i > 0; i -= 2) {
    let space = " ".repeat(bottomCounter);
    bottom += `${space}${`*`.repeat(i)}\n`;
    bottomCounter++;
  }

  let top = "";
  let topCounter = bottomCounter - 1;

  for (let i = 1; i < n; i += 2) {
    let space = " ".repeat(topCounter);
    top += `${space}${`*`.repeat(i)}\n`;
    topCounter--;
  }

  return top.concat(bottom);
};

//S2
function diamond(n) {
  if (n % 2 == 0 || n < 1) return null;
  var x = 0,
    add,
    diam = line(x, n);
  while ((x += 2) < n) {
    add = line(x / 2, n - x);
    diam = add + diam + add;
  }
  return diam;
} //z.

function repeat(str, x) {
  return Array(x + 1).join(str);
}
function line(spaces, stars) {
  return repeat(" ", spaces) + repeat("*", stars) + "\n";
}

//S3
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = "";
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += " ".repeat(len);
    str += "*".repeat(n - 2 * len);
    str += "\n";
  }
  return str;
}
