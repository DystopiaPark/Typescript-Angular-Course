interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: User = {
  name: "John",
  id: 1,
  email: "",
};

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

interface Login {
  login(): User; // method definition
}
