/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// ---- Implicit Type Conversion ----
// JavaScript automatically converts the number into a string here
let itemCount = 3;
let summary = "You ordered " + itemCount + " items";
console.log(summary);        // "You ordered 3 items"
console.log(typeof summary); // "string"

// Edge case: implicit conversion gone wrong with undefined
let mystery = 10 + undefined;
console.log(mystery);        // NaN
console.log(typeof mystery); // "number" (NaN is still classified as type "number")


// ---- Explicit Type Conversion ----
// We deliberately convert the type ourselves
let rawInput = "100";
let convertedInput = Number(rawInput);
console.log(convertedInput);       // 100
console.log(typeof convertedInput); // "number"

// Edge case: explicit conversion with null
let missingValue = null;
let convertedMissing = Number(missingValue);
console.log(convertedMissing);       // 0 (null explicitly converts to 0)
console.log(typeof convertedMissing); // "number"