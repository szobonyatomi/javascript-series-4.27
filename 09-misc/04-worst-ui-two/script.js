/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var x = document.getElementById('target').innerHTML;
  var n = parseInt(x);
  //let min = document.getElementById('target').getAttribute('data-min');

  document.getElementById('part-four').addEventListener('click', function () {
    increase('part-four');
    n = n + 1;
    print(n);
  });

  document.getElementById('part-three').addEventListener('click', function () {
    increase('part-three');
    n = n + 100;
    print(n);
  });

  document.getElementById('part-two').addEventListener('click', function () {
    increase('part-two');
    n = n + 10000;
    print(n);
  });

  document.getElementById('part-one').addEventListener('click', function () {
    increase('part-one');
    n = n + 1000000;
    print(n);
  });

  function increase(item) {
    var nbr = parseInt(document.getElementById(item).innerHTML);
    newNbr = nbr + 1;
    if (newNbr < 10) {
      document.getElementById(item).textContent = '0' + newNbr;
    } else {
      document.getElementById(item).textContent = newNbr;
    }
  }

  function print(item) {
    document.getElementById('target').innerHTML = '+' + item;
  }
})();
