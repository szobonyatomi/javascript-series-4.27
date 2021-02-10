/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('run').addEventListener('click', function () {
    var dobD = document.getElementById('dob-day').value;
    var dobM = document.getElementById('dob-month').value;
    var dobY = document.getElementById('dob-year').value;
    var x = new Date();
    var d = x.getDay();
    var m = x.getMonth() + 1;
    var y = x.getFullYear();

    //v1 - it give back the user's age in days, months and days
    /*
    alert(
      'You are ' +
        (y - dobY) +
        ' age and ' +
        (m - dobM) +
        ' moths and ' +
        (d - dobD) +
        ' days old!'
    );
*/
    //v2 - it give back your real ages (and birthday greetings messege)
    if (dobM == m && dobD == d) {
      alert(
        'Happy Birthday!!! You are ' +
          (y - dobY) +
          ' years old today! Congratulations!'
      );
    } else if (dobM <= m && dobD < d) {
      alert('You are ' + (y - dobY) + ' years old.');
    } else {
      alert('You are ' + (y - dobY - 1) + ' years old.');
    }
  });
})();
