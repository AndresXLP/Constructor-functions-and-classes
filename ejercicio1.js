class person {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
  hello = (name) => `Hello ${name}, my name is ${this.name}`;
  bmi = () => `Your BMI is ${this.weight / this.height ** 2}`;
}

const pedro = new person("Pedro", 72, 1.5);

console.log(pedro.hello("Maria"));
console.log(pedro.bmi());
