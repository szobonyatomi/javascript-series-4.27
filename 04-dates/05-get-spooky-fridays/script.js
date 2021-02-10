/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('run').addEventListener('click', function () {
    var i, d, x, m, z;
    var f = new Array();
    var month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    var a = new Date();
    var t = a.getFullYear();

    var year = document.getElementById('year').value;

    for (i = 1; i <= 12; i++) {
      if (i < 10) {
        d = new Date(year + '-0' + i + '-13');
      } else {
        d = new Date(year + '-' + i + '-13');
      }
      x = d.getDay();

      if (x == 5) {
        m = d.getMonth();
        f.push(month[m]);
      }
    }

    if (year < t) {
      z = 'was/were';
    } else if (year == t) {
      z = 'is/are';
    } else {
      z = 'will be';
    }

    alert('Friday 13 ' + z + ' in ' + year + ': \n' + f.join('\n'));
  });
})();
