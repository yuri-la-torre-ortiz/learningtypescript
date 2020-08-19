"use strict";
/*
function add(n1: number, n2: number): number {
we can explicitly assign the result type,
however, implicit assignment is best practice
    */
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    //A void type means nothing is returned in a function: console.log doesn't return a value
    console.log('Result: ' + num);
    //An undefined return type means "undefined" is simply returned
    // *** Void is *much* more frequent than undefined when no value is returned***
}
printResult(add(9, 16));
// variables can be assigned to functions
//let combineValues: Function;
var combineValues;
// assigns function type without specifying the actual parameters used
combineValues = add;
console.log(combineValues(8, 8));
//cb is a callback function
function addAndHandle(n1, n2, cb) {
    //cb's void return type will reject any return values given to the callback
    var result = n1 + n2;
    cb(result);
}
addAndHandle(9, 25, console.log);
addAndHandle(9, 27, function (result) {
    console.log(result);
    //this return value is ignored because of the void return type
    return result;
});
