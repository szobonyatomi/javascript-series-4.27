/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('pass-one').addEventListener('input', counter);

  function counter() {
    var x = document.getElementById('pass-one').value;
    var digit = /\d/g;
    var nbr = x.match(digit);

    if (x.length >= 8 && nbr.length >= 2) {
      document.querySelector('.indicator').innerHTML = 'OK';
    }
  }
})();
