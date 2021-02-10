/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var d = new Date();
  var h = d.getHours();

  if (h > 5 && h <= 9) {
    document.getElementById('target').innerHTML = 'Good morning!';
  } else if (h >= 12 && h < 13) {
    document.getElementById('target').innerHTML = 'Good appetite!';
  } else if (h >= 18 && h < 22) {
    document.getElementById('target').innerHTML = 'Good evening!';
  } else if (h >= 22 && h < 5) {
    document.getElementById('target').innerHTML =
      'Stop learning JS and go to the bed! NOW!!!';
  } else {
    document.getElementById('target').innerHTML = 'Hello!';
  }

  console.log(h);

  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
})();
