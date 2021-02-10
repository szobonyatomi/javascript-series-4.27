/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var numbers = new Array();

(function () {
  document.getElementById('run').addEventListener('click', () => {
    var sum = 0;

    for (var i = 1; i <= 10; i++) {
      var x = Math.floor(Math.random() * 101);
      document.getElementById('n-' + i).innerHTML = x;
      numbers.push(x);
      sum = sum + x;
    }

    document.getElementById('min').innerHTML = Math.min(...numbers);
    document.getElementById('max').innerHTML = Math.max(...numbers);
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('average').innerHTML = sum / 10;
  });
})();
