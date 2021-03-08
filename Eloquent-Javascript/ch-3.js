/* Use this to run file in REPL without polluting the
command history with the whole file
    var fs = require('fs');
    eval(fs.readFileSync('foo.js').toString())
fs is the file system module */

// Finds solution to reach target with only multiplying by 3 or
// adding by 5 starting from 1
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current * 3, `(${history}*3)`) ||
        find(current + 5, `(${history} + 5)`)
      );
    }
  }
  return find(1, "1");
}

// Counts number of occurances of a char
countChar = (phrase, chr) => {
    count = 0;
    for (let i = 0; i <phrase.length; i++) {
        if (phrase[i]==chr) {
            count++;
        }
    }
    return count;
}