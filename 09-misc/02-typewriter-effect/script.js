/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.querySelector('#target').innerHTML = '';
  var text = 'TypeWriter effect with JavaScript!';

  var i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.querySelector('#target').innerHTML += text.charAt(i);
      var speed = Math.floor(Math.random() * (400 - 20) + 20);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
})();
