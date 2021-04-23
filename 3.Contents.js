/*
Contents of an object are values (any type) at named 'locations' called `properties`

It's important to note that while we say "contents" which implies that these values are ACTUALLY stored inside the object, that's merely an appearance. 

The engine stores values in implementation-dependent ways, and may very well not store them in some object container. 

What is stored in the container are these property names, which act as pointers (technically, references) to where the values are stored.
*/

// ~~~~ BEGIN EXAMPLE 1 ~~~~

// var myObject = {
//   a: 2,
// };

// // What will log in the console?
// console.log("myObject.a: ", myObject.a);
// console.log('myObject["a"]: ', myObject["a"]);

// ~~~~ END EXAMPLE 1 ~~~~

/*
`myObject.a` is "property" access (dot notation)
`myObject["a"]` is "key" access (bracket notation)
But they actually do the same thing, accessing the `property` referred to where `key = a`
We continue with the term "property access" from here on
*/

//Dot notation requires an `Identifier`

/*
When to not use dot notation
*/

// ~~~~ BEGIN EXAMPLE 2A ~~~~

// var anObject = {
//   "Super-Fun!": "Hello",
// };
// // bad
// //console.log("anObject.Super-Fun!: ", anObject.Super-Fun!);
// // good
// console.log('anObject["Super-Fun!"]: ', anObject["Super-Fun!"]);

// ~~~~ END EXAMPLE 2A ~~~~

/*
A way to use bracket notation
The program can build of the value of the string
*/

// ~~~~ BEGIN EXAMPLE 2B ~~~~

// var theObject = {
//   a: 2,
// };
// var idx = "a";
// console.log("theObject[idx]: ", theObject[idx]);

// ~~~~ END EXAMPLE 2B ~~~~

/*
In objects, property names are ALWAYS `string` types
Other primitive types will be converted to `string`
*/

// ~~~~ BEGIN EXAMPLE 3 ~~~~

// var myObject = {};

// myObject[true] = "foo";
// myObject[3] = "bar";
// myObject[myObject] = "baz";

// // what will log?!
// console.log('myObject["true"]: ', myObject["true"]);
// console.log('myObject["3"]: ', myObject["3"]);
// console.log('myObject["[object Object]"]: ', myObject["[object Object]"]);

// ~~~~ END EXAMPLE 3 ~~~~

/*********************************
 **** COMPUTED PROPERTY NAMES ****
 ********************************/

// We can dynamically build object keys

// ~~~~ BEGIN EXAMPLE 4 ~~~~

// var prefix = "foo";

// var myObject = {
//   [prefix + "bar"]: "hello",
//   [prefix + "baz"]: "world",
// };

// // Guess the expected output
// console.log('myObject["foobar"]: ', myObject["foobar"]);
// console.log('myObject["foobaz"]: ', myObject["foobaz"]);

// ~~~~ END EXAMPLE 4 ~~~~

/*
The most common use of computed property names are ES6 `Sumbol`s
Which we're not talking about so don't worry about it
*/

/*****************************
 **** PROPERTY VS. METHOD ****
 ****************************/

/*
It is tempting to think of a function as belonging to an object
In other languages, functions which belong to objects ("classes") are "methods"
Not uncommon to hear "method access" as opposed to "property access"

Functions never "belong" to objects
Accessing a property on an object is "property access" (gasp)
  * Doesn't matter what value type you get back
*/

// ~~~~ BEGIN EXAMPLE 5 ~~~~

// function foo() {
//   console.log("foo");
// }

// var someFoo = foo; // variable reference to `foo`

// var myObject = {
//   someFoo: foo,
// };

// /*
//  * What will log out?
//  * is there something on `foo`, `someFoo`, or `myObject.someFoo` implying it is "owned" by another object?
//  */
// console.log("foo: ", foo);
// console.log("someFoo: ", someFoo);
// console.log("myObject.someFoo: ", myObject.someFoo);

// ~~~~ END EXAMPLE 5 ~~~~

// Conclusion: "function" and "method" are interchangable in JS

/*
BONUS ROUND
*/

// ~~~~ BEGIN BONUS EXAMPLE ~~~~

// var myObject = {
//   foo: function foo() {
//     console.log("foo");
//   },
// };

// var someFoo = myObject.foo;

// //references to the same object
// console.log("someFoo: ", someFoo);
// console.log("myObject.foo: ", myObject.foo);

// ~~~~ END BONUS EXAMPLE ~~~~

/****************
 **** ARRAYS ****
 ***************/

// Like an object but where keys are inherent indices

// ~~~~ BEGIN EXAMPLE 6 ~~~~

// var myArray = ["foo", 42, "bar"];
// // what will log in the console?
// // is `length` 2 or 3?
// console.log("myArray.length: ", myArray.length);
// console.log("myArray[0]: ", myArray[0]);
// console.log("myArray[2]: ", myArray[2]);

// ~~~~ END EXAMPLE 6 ~~~~

/*
 * Length of an array must be `last index + 1`
 * You can add properties to arrays??
 */

// ~~~~ BEGIN EXAMPLE 7 ~~~~

// var myArray = ["foo", 42, "bar"];
// myArray.baz = "baz";

// // What will `lenght` output?
// console.log("myArray.length: ", myArray.length);
// console.log("myArray.baz: ", myArray.baz);

// ~~~~ END EXAMPLE 7 ~~~~

/*
 * Could use arrays with plain key/value pairs, but this is a bad idea
 * Be careful using property names that LOOK like numbers
 */

// ~~~~ BEGIN EXAMPLE 8 ~~~~

// var myArray = ["foo", 42, "bar"];
// myArray["3"] = "baz";
// console.log("myArray.length: ", myArray.length);
// console.log("myArray[3]: ", myArray[3]);
// console.log('myArray["3"]: ', myArray["3"]);

// ~~~~ END EXAMPLE 8 ~~~~

/*****************************
 **** DUPLICATING OBJECTS ****
 ****************************/

// How are objects duplicated in JS?

// ~~~~ BEGIN EXAMPLE 9 ~~~~

// function anotherFunction() {
//   /*..*/
// }

// var anotherObject = {
//   c: true,
// };

// var anotherArray = [];

// var myObject = {
//   a: 2,
//   b: anotherObject, // reference, not a copy!
//   c: anotherArray, // another reference!
//   d: anotherFunction,
// };

// anotherArray.push(anotherObject, myObject);

// What should be the representation of a copy of `myObject`?

// ~~~~ END EXAMPLE 9 ~~~~

/*
Shallow vs Deep Copies of `myObject`:
* Shallow: copies the value of `a`, but keeps references on `b`, `c`, `d`
  * Reference the same places as the original object
* Deep: duplicate `myObject` & `anotherObject` & `anotherArray`
  * But `anotherArray` contains a reference to `myObject` so duplicate that
  * But `myObject` contains a reference to `anotherArray`
  * Oh no everything is blowing up
* What is the solution here?
* What is a true duplicate of an object?
*/

/*
Can we assume objects can be serialized with a JSON string then re-parsed to an 
object with the same structure and values?
"JSON safe"
*/
// ~~~~ BEGIN EXAMPLE 10 ~~~~

// var someObj = { a: 1, b: 2 };
// var newObj = JSON.parse(JSON.stringify(someObj));
// console.log("newObj: ", newObj);

// ~~~~ END EXAMPLE 10 ~~~~

/*
ES6 introduces `Object.assign(`target`, `source`)`
* Take a target object and one or more source objects
* Iterate over the enumerable, owned keys on the source object(s) and copy them
* Return target
*/

// ~~~~ BEGIN EXAMPLE 9A ~~~~
// uncomment example 9 ya dummy

// var newObj = Object.assign({}, myObject);
// console.log("newObj: ", newObj);

// newObj.a; // 2
// newObj.b === anotherObject; // true
// newObj.c === anotherArray; // true
// newObj.d === anotherFunction; // true

// newObj.c[1].c is `Circular`. What does that mean?

// ~~~~ END EXAMPLE 9A ~~~~

/******************************
 **** PROPERTY DESCRIPTORS ****
 *****************************/

// Objects have descriptors, potentially more than you might expect

// ~~~~ BEGIN EXAMPLE 11 ~~~~

// var myObject = {
//   a: 2,
// };

// console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
// // {
// //    value: 2,
// //    writable: true,
// //    enumerable: true,
// //    configurable: true
// // }

// ~~~~ END EXAMPLE 11 ~~~~

// What if you want to add a property, or modify one that is `configurable`?

// ~~~~ BEGIN EXAMPLE 12 ~~~~

// var myObject = {};

// Object.defineProperty(myObject, "a", {
//   value: 2,
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });

// // What will log to the console?
// console.log("myObject.a: ", myObject.a);

// ~~~~ END EXAMPLE 12 ~~~~

/*
 **** WRITABLE: The ability to change the value of a property ****
 */

// ~~~~ BEGIN EXAMPLE 13 ~~~~

// var myObject = {};

// Object.defineProperty(myObject, "a", {
//   value: 2,
//   writable: false, // not writable!
//   configurable: true,
//   enumerable: true,
// });

// myObject.a = 3;

// // What will log to the console?
// console.log("myObject.a: ", myObject.a);

// ~~~~ END EXAMPLE 13 ~~~~

// In `strict mode` we would expect to get an error
// but that's not happening for some reason

// ~~~~ BEGIN EXAMPLE 14 ~~~~

// ("use strict");

// var myObject = {};

// Object.defineProperty(myObject, "a", {
//   value: 2,
//   writable: false, // not writable!
//   configurable: true,
//   enumerable: true,
// });

// myObject.a = 3; // TypeError

// // ¯\_(ツ)_/¯

// ~~~~ END EXAMPLE 14 ~~~~

/*
 **** CONFIGURABLE: The ability to modify a descriptor definition ****
 */

// ~~~~ BEGIN EXAMPLE 15 ~~~~

// var myObject = {
//   a: 2,
// };

// myObject.a = 3;
// myObject.a;

// Object.defineProperty(myObject, "a", {
//   value: 4,
//   writable: true,
//   configurable: false, // not configurable!
//   enumerable: true,
// });

// myObject.a; // 4
// myObject.a = 5;
// myObject.a; // 5

// Object.defineProperty(myObject, "a", {
//   //   value: 6,
//   //   writable: true,
//   //   configurable: true,
//   //   enumerable: true,
// }); // TypeError

// // butwhy.gif

// ~~~~ END EXAMPLE 15 ~~~~

// Can `configurable: false` objects be deleted?

// ~~~~ BEGIN EXAMPLE 16 ~~~~

// var myObject = {
//   a: 2,
// };

// console.log("myObject.a: ", myObject.a);
// delete myObject.a;
// console.log("myObject.a: ", myObject.a);

// Object.defineProperty(myObject, "a", {
//   value: 2,
//   writable: true,
//   configurable: false,
//   enumerable: true,
// });

// console.log("myObject.a: ", myObject.a);
// delete myObject.a;
// console.log("myObject.a: ", myObject.a);

// ~~~~ END EXAMPLE 16 ~~~~

/*
`delete` is NOT a tool to free up memory
`delete` is just an object property removal operation
*/

/*
What is the difference between writable and configurable?
* Writable: The value is allowed to change
* Configurable: The value is still allowed to change, but you can't delete me or change my definition
*/

/*
 **** ENUMERABLE: If a property will show up in certain object-property enumerations ****
 */

/**********************
 **** IMMUTABILITY ****
 *********************/

// What if I want an object or property that cannot be changed?

// ~~~~ BEGIN EXAMPLE 17 ~~~~

// make this actually immutable

// const myImmutableObject = {
//   foo: [1, 2, 3],
//   bar: "some other stuff",
// };

// myImmutableObject.foo.push(4);
// myImmutableObject.foo;

// console.log("myImmutableObject: ", myImmutableObject);

// ~~~~ END EXAMPLE 17 ~~~~

/*
 **** OBJECT CONSTANT: Basically create a constant (can't be changed, redefined, or deleted) ****
 */

// combine `writable: false` and `configurable: false`
// ~~~~ BEGIN EXAMPLE 18 ~~~~

// var myObject = {};

// Object.defineProperty(myObject, "FAVORITE_NUMBER", {
//   value: 42,
//   writable: false,
//   configurable: false,
// });

// ~~~~ END EXAMPLE 18 ~~~~

/*
 **** PREVENT EXTENSIONS: No new properties allowed ****
 */

// ~~~~ BEGIN EXAMPLE 19 ~~~~

// var myObject = {
//   a: 2,
// };

// Object.preventExtensions(myObject);

// myObject.b = 3;

// // What will log for `myObject.b`?
// console.log("myObject.b: ", myObject.b);

// ~~~~ END EXAMPLE 19 ~~~~

/*
 **** SEAL: Essentially calls Object.preventExtensions && sets `configurable:false` ****
 */

// ~~~~ BEGIN EXAMPLE 20 ~~~~

// const jakesObject = {
//   foo: "hello",
//   bar: "there",
// };

// Object.seal(jakesObject);

// jakesObject.baz = "general kenobi";

// // What will log to the console?
// console.log("jakesObject: ", jakesObject);

// ~~~~ END EXAMPLE 20 ~~~~

// Is it "WRITABLE" though?

// ~~~~ BEGIN EXAMPLE 21 ~~~~

// const jakesObject = {
//   foo: "hello",
//   bar: "there",
// };

// Object.seal(jakesObject);

// jakesObject.bar = "goodbye";

// // What will log to the console?
// console.log("jakesObject: ", jakesObject);

// ~~~~ END EXAMPLE 21 ~~~~

/*
 **** FREEZE: Essentially calls Object.seal && sets `writable:false` ****
 */

// ~~~~ BEGIN EXAMPLE 22 ~~~~

// const jakesObject = {
//   foo: "get",
//   bar: "lost",
// };

// Object.freeze(jakesObject);

// jakesObject.baz = "creep";

// // What will log to the console?
// console.log("jakesObject: ", jakesObject);

// ~~~~ END EXAMPLE 22 ~~~~

// ~~~~ BEGIN EXAMPLE 23 ~~~~

// const jakesObject = {
//     foo: "get",
//     bar: "lost",
//   };

//   Object.freeze(jakesObject);

//   jakesObject.bar = "bent";

//   // What will log to the console?
//   console.log("jakesObject: ", jakesObject);

// ~~~~ END EXAMPLE 23 ~~~~

/*****************
 **** [[GET]] ****
 ****************/

/*
 * property accessing is actually a [[Get]] operation
 * inspect the object for a request property name
 * if found, return associated value
 * if not found, return `undefined`

 * this is different from typical variable references
 * if a variable is referenced but not found, a `ReferenceError` is thrown
 */

// ~~~~ BEGIN EXAMPLE 24 ~~~~

// var myObject = {
//   a: 2,
//   foo: undefined,
// };

// // Which reference probably does the most work?
// console.log("myObject.a: ", myObject.a);
// console.log("myObject.b: ", myObject.b);
// console.log("myObject.foo: ", myObject.foo);

// ~~~~ END EXAMPLE 24 ~~~~

/*****************
 **** [[PUT]] ****
 ****************/

/*
 * [[Put]] depends on on a number of factors
 * Is the property an accessor descriptor? If so, call the setter (see next)
 * is `writable: false`? if so, FAIL
 * else, set value to the existing property as normal
 */

/***************************
 **** GETTERS & SETTERS ****
 **************************/

/*
[[Put]] and [[Get]] completely control how values are set or retrieved
*/

/*
 **** GETTERS: Call a hidden function to retrieve a value ****
 */

/*
 **** SETTERS: Call a hidden function to set a value ****
 */

// ~~~~ BEGIN EXAMPLE 25 ~~~~

// // object-literal syntax
// var myObject = {
//   // define a getter for `a`
//   get a() {
//     return 2;
//   },
// };

// // explicit definition
// Object.defineProperty(
//   myObject, // target
//   "b", // property name
//   {
//     // descriptor; define a getter for `b`
//     get: function () {
//       console.log("this: ", this);
//       return this.a * 2;
//     },

//     // make sure `b` shows up as an object property
//     enumerable: true,
//   }
// );

// console.log("myObject.a: ", myObject.a);
// console.log("myObject.b: ", myObject.b);

// ~~~~ END EXAMPLE 25 ~~~~

// accessing `a` or `b` results in a hidden function call to a getter

// ~~~~ BEGIN EXAMPLE 26 ~~~~

// var myObject = {
// 	// define a getter for `a`
// 	get a() {
// 		return 2;
// 	}
// };

// myObject.a = 3;

// // What will be logged?
// console.log('myObject.a: ', myObject.a);

// ~~~~ END EXAMPLE 26 ~~~~

/*
Since we only defined a getter for `a`, if we try to set the value of `a` later,
the set operation won't throw an error but will just silently throw the 
assignment away. Even if there was a valid setter, our custom getter is hard-
coded to return only 2, so the set operation would be moot.
*/

// BEST PRACTICE: IF YOU DEFINE A GETTER, DEFINE A SETTER. AND VICE VERSA

// ~~~~ BEGIN EXAMPLE 27 ~~~~

// var myObject = {
//   // define a getter for `a`
//   // _a_ named is by convention and is just a normal property
//   get a() {
//     return this._a_;
//   },

//   // define a setter for `a`
//   set a(val) {
//     this._a_ = val * 2;
//   },
// };

// console.log("myObject.a: ", myObject.a);

// myObject.a = 2;
// console.log("myObject.a: ", myObject.a);

// ~~~~ END EXAMPLE 27 ~~~~

/*******************
 **** EXISTENCE ****
 ******************/

/*
 * earlier we made an object with `{ a: undefined }`
 * how is this different from if `a` didn't exist on the object?
 */

// ~~~~ BEGIN EXAMPLE 28 ~~~~

// var myObject = {
// 	a: 2
// };

// console.log('("a" in myObject): ', ("a" in myObject));
// console.log('("b" in myObject): ', ("b" in myObject));

// console.log('myObject.hasOwnProperty( "a" ): ', myObject.hasOwnProperty( "a" ));
// console.log('myObject.hasOwnProperty( "b" ): ', myObject.hasOwnProperty( "b" ));

// ~~~~ END EXAMPLE 28 ~~~~

/*
BONUS ROUND
*/

// `in` checks for a PROPERTY name, not a value

// ~~~~ BEGIN BONUS EXAMPLE  ~~~~

// const jakesObject = {
//     foo: 'hello',
//     bar: 'goodbye',
// }

// const jakesArray = ['hello', 'goodbye']

// console.log('("foo" in jakesObject): ', ("foo" in jakesObject));
// console.log('("hello" in jakesArray): ', ("hello" in jakesArray));
// console.log('("1" in jakesArray): ', ("1" in jakesArray));

// ~~~~ END BONUS EXAMPLE  ~~~~

/**********************
 **** ENUMBERATION ****
 *********************/

// ~~~~ BEGIN EXAMPLE 29 ~~~~

var myObject = {};

Object.defineProperty(
  myObject,
  "a",
  // make `a` enumerable, as normal
  { enumerable: true, value: 2 }
);

Object.defineProperty(
  myObject,
  "b",
  // make `b` NON-enumerable
  { enumerable: false, value: 3 }
);

myObject.b; // 3
"b" in myObject; // true
myObject.hasOwnProperty("b"); // true

// WHAT WILL LOG??
for (var k in myObject) {
  console.log(k, myObject[k]);
}

// go thru these one by one
console.log(
  'myObject.propertyIsEnumerable("a"): ',
  myObject.propertyIsEnumerable("a")
);
console.log(
  'myObject.propertyIsEnumerable("b"): ',
  myObject.propertyIsEnumerable("b")
);
console.log("Object.keys(myObject): ", Object.keys(myObject));
console.log(
  "Object.getOwnPropertyNames(myObject): ",
  Object.getOwnPropertyNames(myObject)
);

// ~~~~ END EXAMPLE 29 ~~~~

/*
 * `propertyIsEnumerable`: does this property name exist directly on the object and is  `enumberable: true`?
 * `Object.keys()` & `Object.getOwnPropertyNames()` inspect only the direct object specified
 * currenlty no built-in way to get a list of all properties similar to what `in` does
 */
