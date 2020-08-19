//type alias example
type Combinable = number | string;  //converts the union type and gives it an alias

function combine(
    input1: Combinable, //now the union type [number | string] has an alias of Combinable & is used here
    input2: Combinable, 
    resultConversion: 'as-number' | 'as-text') {  
        //Literal types have a specific type and value && this is another union type example [combining types]
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //+input1 converts to number
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', 26, 'as-text');
console.log(combinedStringAges)

const combinedNames = combine('Sofia', 'Max', 'as-text');
console.log(combinedNames);

