interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee {
  #id: number;

  protected name: string;

  address: Address;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", {
  street: "ABC",
  city: "Bangalore",
  state: "Karnataka",
  pin: "560076",
});

john.empId = 100;

console.log(john.empId);

// Employee.getEmployeeCount();

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

let address = john.getNameWithAddress();

console.log(john, address);
