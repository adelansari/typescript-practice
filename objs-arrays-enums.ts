// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //marks a tuple type
// } = {
//     name: 'DarkSlayer',
//     age: 27,
//     hobbies: ['Sports','Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;


// start enume type in uppercase character
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'DarkSlayer',
    age: 27,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sport','Coding']

// let favoriteActivities: any;
// favoriteActivities = ['Sport',1]

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}


if (person.role === Role.AUTHOR) {
    console.log('is author')
}