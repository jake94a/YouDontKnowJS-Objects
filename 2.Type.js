/* Objects are the general building block upon which much of JS is built. 
They are one of the 6 primary types (called "language types" in the specification) in JS:
* string
* number
* boolean
* null
* undefined
* object
*/

// [string, number, boolean, null, undefined] are not objects

// null is not an object type
// a bug in JS: `typeof null` returns the string "object" incorrectly

// It's a common mis-statement that "everything in JavaScript is an object". This is clearly not true.

/* object sub-types, referred to as "complex primitives"
 * function (technically a callable object")
    * functions in JS are "first class" and can be handled like other plain objects
 */

/**************************
 **** BUILT-IN OBJECTS ****
**************************/

/* Other object sub-types
* String
* Number
* Boolean
* Object
* Function
* Array
* Date
* RegExp
* Error
These have a complicated relationship with their simple primitive counter-parts
They appear to be types or classes but they are built-in functions
They can be used as a constructor with `new` operator
*/

var strPrimitive = "I am a string";
console.log("strPrimitive: ", strPrimitive);
console.log("typeof strPrimitive: ", typeof strPrimitive); // "string"
console.log("strPrimitive instanceof String: ", strPrimitive instanceof String); // false

var strObject = new String("I am a string");
console.log("strObject: ", strObject);
console.log("typeof strObject: ", typeof strObject); // "object"
console.log("strObject instanceof String: ", strObject instanceof String); // true

// inspect the object sub-type
Object.prototype.toString.call(strObject); // [object String]
console.log(
  "Object.prototype.toString.call( strObject ): ",
  Object.prototype.toString.call(strObject)
);

// strObject is an object created by the `String` constructor

/* 
"I am a string" is NOT an object - primitive literal. 
Must be a `String` object to operate on it.
JS coerces `string` primitive into `String` object when necessary
*/

var strPrimitive = "I am a string";
console.log(strPrimitive.length); // 13
console.log(strPrimitive.charAt(3)); // "m"

var numPrimitive = 42;
console.log(typeof numPrimitive);

var numObject = new Number(42);
console.log(typeof numObject);

console.log(
  "42.359.toFixed(2): ",
  (42.359).toFixed(2),
  typeof (42.359).toFixed(2)
);

/*
 * We called a `string` primitive but the engine coerced it into a `String` object
 * We also called a `number` primitive but the engine coerced it into a `String` as well
 * Likewise for `Boolean` objects from `boolean` primitives apparently
 * `null` and `undefined` have no object wrapper
 * `Date` values can only be created with their constructed object form
    * const today = new Date();
*/

/*
`Object`s, `Array`s, `Function`s, `RegExp`s are all objects regardless of form
* literal form = `object`
* constructed form = `object`   (but has extra options)
But only use constructed form if you need the extra options
*/

/*
`Error` objects are rarely created explicitly
But go for it
*/

const jakesMistake = new Error()
console.log('typeof jakesMistake: ', typeof jakesMistake);