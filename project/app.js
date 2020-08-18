//Pascal naming convention (upper case) because it's a custom type
//By default, enum variables are assigned numeric values starting at 0:
//Therefore, admin = 0, read_only = 1, & author = 2
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["read_only"] = 1] = "read_only";
    Role[Role["author"] = 2] = "author";
})(Role || (Role = {}));
;
/* const person: {
    name: string;
    age: number
} = { */
// better syntax: inferred types
/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // role is a tuple & requires explicit type assignments
} = {
    name: 'Laura',
    age: 45,
    hobbies: ['swimming', 'programming', 'yoga', 'chess'],
    role: [ 2, 'author]
}; */
// person.role.push('admin')  *** push method can alter a tuple
// array type assignment
var person = {
    name: 'Laura',
    age: 45,
    hobbies: ['swimming', 'programming', 'yoga', 'chess'],
    role: Role.author
};
var favoriteActivities;
favoriteActivities = ['swimming'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.author) {
    console.log('is author');
}
