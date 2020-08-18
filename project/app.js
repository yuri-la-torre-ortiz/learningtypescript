/* const person: {
    name: string;
    age: number
} = { */
// better syntax: inferred types
var person = {
    name: 'Laura',
    age: 45,
    hobbies: ['swimming', 'programming', 'yoga', 'chess']
};
// array type assignment
var favoriteActivities;
favoriteActivities = ['swimming'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
