function Student(name, age) {
  this.name = name;
  this.age = age;
  this.schooName = this.schooName;
  this.showMe = () => {
    return `Welcome to the class ${this.name}`;
  };
}

const John = new Student('John Doe', 14, 'NMMI');

class Person {
  constructor(name, age, schooName) {
    this.name = name;
    this.age = age;
    this.schooName = schooName;
  }
  greeting() {
    return `Welcome back ${this.name}`;
  }
}

class Instructor extends Person{
  constructor(name, age, schooName, yearsDev) {
    super(name, age, schooName);
    this.yearsDev = yearsDev;
  }
  amountOfYears() {
    return `${this.name} has been developing for ${this.yearsDev} years`;
  }
}

const Jane = new Person('Jane Doe', 25, 'Columbia Universtity');
const Bob = new Person('Bob Ross', 23, 'ODU', 5);

console.log(Jane.amountOfYears());
console.log(Bob.greeting());