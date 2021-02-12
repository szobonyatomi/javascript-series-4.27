/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var t = document.createElement('TABLE');
  t.setAttribute('id', 'newTable');
  document.getElementById('target').appendChild(t);

  for (var i = 0; i < 10; i++) {
    var r = document.createElement('TR');
    document.getElementById('newTable').appendChild(r);
  }
})();
