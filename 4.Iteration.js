// ~~~~ BEGIN EXAMPLE 1 ~~~~

// var myArray = [1, 2, 3];

// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// ~~~~ END EXAMPLE 1 ~~~~

/*
 * This doesn't iterate over the values, it iterates over the indices!
 * But what if I do want to iterate over values..?
 */

/*
 * special note:
 * `for` loops are not guaranteed to iterate in a particular order.
 * Do not rely on any observed ordering for anything that requires consitency among environments
 */

// ~~~~ BEGIN EXAMPLE 2 ~~~~

// var myArray = [1, 2, 3];

// for (var v of myArray) {
//   console.log(v);
// }

// ~~~~ END EXAMPLE 2 ~~~~

/*
MANUALLY ITERATING OVER VALUES?!?!?!?!?!
*/

// ~~~~ BEGIN EXAMPLE 3 ~~~~

// var myArray = [1, 2, 3];
// var it = myArray[Symbol.iterator]();

// console.log("it.next(): ", it.next());
// console.log("it.next(): ", it.next());
// console.log("it.next(): ", it.next());
// console.log("it.next(): ", it.next());

// ~~~~ END EXAMPLE 3 ~~~~

/*
 * @@iterator is not the iterator object, rather the function that returns the iterator object
 * Arrays automatically iterate in `for..of` loops
 * Regular objects do not have a build in `@@iterator`
 * For more complex reasons than we'll talk about
 */

// ~~~~ BEGIN EXAMPLE 4 ~~~~

var myObject = {
  a: 2,
  b: 3,
};

Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var o = this;
    var idx = 0;
    var ks = Object.keys(o);
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        };
      },
    };
  },
});

// iterate `myObject` manually
var it = myObject[Symbol.iterator]();
console.log("it.next(): ", it.next());
console.log("it.next(): ", it.next());
console.log("it.next(): ", it.next());

// iterate `myObject` with `for..of`
for (var v of myObject) {
  console.log(v);
}

/*

( •_•)

( •_•)>⌐■-■

(⌐■_■)

*/

// ~~~~ END EXAMPLE 4 ~~~~

/*
How to kill a computer 101
*/

// Iterate forever?

// ~~~~ BEGIN EXAMPLE 5 ~~~~

var randoms = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return { value: Math.random() };
      },
    };
  },
};

var randoms_pool = [];
for (var n of randoms) {
  randoms_pool.push(n);

  // don't proceed unbounded!
  if (randoms_pool.length === 100) break;
}

// ~~~~ END EXAMPLE 5 ~~~~
