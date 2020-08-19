"use strict";
function combine(input1, //now the union type [number | string] has an alias of Combinable & is used here
input2, resultConversion) {
    //Literal types have a specific type and value && this is another union type example [combining types]
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //+input1 converts to number
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', 26, 'as-text');
console.log(combinedStringAges);
var combinedNames = combine('Sofia', 'Max', 'as-text');
console.log(combinedNames);
