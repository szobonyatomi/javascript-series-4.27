/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var x = Math.floor(Math.random() * 100);
  console.log(x);
  var y = prompt('Which number i Thought');

  while (x != y) {
    if (x > y) {
      y = prompt('My number is higher likes yours. Try again!');
    } else {
      y = prompt('My number is lower likes yours. Try again!');
    }
  }

  if ((x = y)) {
    alert('You win!');
  }
})();
