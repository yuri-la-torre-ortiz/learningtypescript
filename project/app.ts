
/* const person: {
    name: string;
    age: number
} = { */
// better syntax: inferred types
const person = {
    name: 'Laura',
    age: 45,
    hobbies: ['swimming', 'programming', 'yoga', 'chess']
};

// array type assignment
let favoriteActivities: string[];
favoriteActivities = ['swimming']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}