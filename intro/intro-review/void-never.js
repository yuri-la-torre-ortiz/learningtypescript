"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; an unknown type cannot be a specific type later
if (typeof userInput === 'string') {
    //an unknown type can become a specific type within a function
    userName = userInput;
}
/*A never return type never returns a value:
It's better to declare 'never' here as 'void' is the implicit type */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
