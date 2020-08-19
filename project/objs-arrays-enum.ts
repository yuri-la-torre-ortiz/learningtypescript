//Pascal naming convention (upper case) because it's a custom type
//By default, enum variables are assigned numeric values starting at 0:
//Therefore, admin = 0, read_only = 1, & author = 2
enum Role {admin, read_only, author};

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
}
var favoriteActivities: string[];
favoriteActivities = ['swimming']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role === Role.author) {
    console.log('is author')
}