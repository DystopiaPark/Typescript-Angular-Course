export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let { name: userName, email: UserLogin }: User = {
  name: "John",
  id: 1,
  email: "",
};

// userLogin

interface Employees extends User {
  // optional property
  salary: number;
}

let employee: Employees = {
  name: "John",
  id: 1,
  email: "",
  salary: 1000,
};

export interface Login {
  Login(): User; // method definition
}

let [user1, user2, ...restUsers]: User[] = [
  {
    name: "John",
    id: 1,
    email: "",
  },
  {
    name: "John1",
    id: 2,
    email: "",
  },
  {
    name: "John2",
    id: 3,
    email: "",
  },
  {
    name: "John3",
    id: 4,
    email: "",
  },
];

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter((user) => user.id > 3);

console.log(result);

// @Component ({})
// class Component {
//   constructor(public name:string)
// }
