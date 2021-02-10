/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById('run').addEventListener('click', function () {
    // your code here

    var x = document.getElementById('numbers').value;
    var numbers = x.split(',');
    /*
 for (var i=0;i<x;i++) {
            x[i]=parseInt(x[i]);
        }

        for (var x = 0; x < x - 1; x++) {
            for (var i = 0; i < x - 1; i++) {
                if (x[i] > x[i + 1]) {
                    var temp = x[i + 1];
                    x[i + 1] = x[i];
                    x[i] = temp;
                }
            }
        }

 */

    alert(
      numbers.sort(function (a, b) {
        return a - b;
      })
    );
  });
})();
