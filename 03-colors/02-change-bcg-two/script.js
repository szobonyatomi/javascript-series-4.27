/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var colors = [
    'black',
    '#d65076',
    '#dd4124',
    '#009b77',
    '#b565a7',
    '#955251',
    '#92a8d1',
    '#92b558',
    '#604c8d',
    '#ff6f61',
    '#0f4c81',
    'white',
  ];

  document.getElementById('run').addEventListener('click', function () {
    var x = document.getElementById('color').value;
    if (colors.length - 1 >= x) {
      document.body.style.backgroundColor = colors[x];
    } else {
      alert('Add number smaller than ' + colors.length);
    }
  });
})();
