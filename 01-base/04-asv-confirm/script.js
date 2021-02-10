/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

while (answer !== 'y') {
  var age = prompt('Please add your age!');
  var sex = prompt('Please, add choose your sex!');
  var town = prompt('Please add your town!');

  (function () {
    if (age !== '' && sex !== '' && town !== '') {
      alert(
        'Your age is : ' + age + '\nYour sex: ' + sex + '\nYou are in :' + town
      );
    } else {
      alert('Try again!');
    }
  })();

  var answer = prompt('These details were correct? (y/n)');
}
