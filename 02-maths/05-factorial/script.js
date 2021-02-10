/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById('run').addEventListener('click', function () {
    var x = document.getElementById('number').value;

    if (x < 0) {
      alert('Type a positive number, please!');
    } else if (x == 0 || x == 1) {
      alert(1);
    } else {
      for (var i = x - 1; i >= 1; i--) {
        x = x * i;
      }
      alert(x);
    }
  });
})();
