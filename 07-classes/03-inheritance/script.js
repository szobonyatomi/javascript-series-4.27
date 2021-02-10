/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById('run').addEventListener('click', () => {
    class Animal {
      constructor(name) {
        this.name = name;
      }

      static greeting = 'Hello';

      sayHello() {
        console.log(`${this.constructor.greeting}! I'm ${this.name}!`);
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name);
      }
    }
    class Cat extends Animal {
      constructor(name) {
        super(name);
      }
    }

    let dog1 = new Dog('Max');
    let cat1 = new Cat('Tom');

    console.log(dog1);
    console.log(cat1);

    dog1.sayHello();
    cat1.sayHello();
  });
})();
