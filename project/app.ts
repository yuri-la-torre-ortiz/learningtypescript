
/* const person: {
    name: string;
    age: number
} = { */
// better syntax: inferred types
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // role is a tuple & requires explicit type assignments
} = {
    name: 'Laura',
    age: 45,
    hobbies: ['swimming', 'programming', 'yoga', 'chess'],
    role: [ 2, 'user']
};
// person.role.push('admin')  *** push method can alter a tuple
// array type assignment
let favoriteActivities: string[];
favoriteActivities = ['swimming']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}