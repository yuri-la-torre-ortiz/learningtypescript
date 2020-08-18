
let message = 'abc';
//one method of type assertion
let endsWithC = (<string>message).endsWith('c');
//second method of type assertion
let alternativeWay = (message as string).endsWith('c');