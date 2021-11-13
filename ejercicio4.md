# Object.create()

### Crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.

```js
const person = {
  weight: 0,
  height: 0,
  name: function () {
    return `${this.firtsName} ${this.lastName}`;
  },
  gamer: function () {
    return this.hobbie === "Video Game"
      ? `${this.name()} It's a Gamer`
      : "Not it's a gamer";
  },
  bmi: function () {
    return `Your BMI is ${this.weight / this.height ** 2}`;
  },
};

const p1 = Object.create(person);
p1.weight = 85;
p1.height = 1.75;
p1.firtsName = "Andres";
p1.lastName = "Puello";
p1.hobbie = "Video Game";
console.log(p1.bmi());
console.log(p1.gamer());
```

- Trate de crear el objeto nuevo en base a objeto construido con `class` pero me generaban errores las funciones.
- Los objetos construidos a base de `function` me sucedia lo mismo.
