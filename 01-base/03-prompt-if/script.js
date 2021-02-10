/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var more_cafe = prompt('Do you want some cakes? (yes/no)').toLowerCase();
(function () {
  if (more_cafe == 'yes') {
    alert('Congrat, you are a cake fun;)!');
  } else {
    alert('More cake for me :p!');
  }
})();
