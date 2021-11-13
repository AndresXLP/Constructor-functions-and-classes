class Auto {
  constructor() {
    this.velocidad = 0;
  }
  acelerar = (num) => (this.velocidad += num);
  frenar = (num) =>
    this.velocidad - num < 0 ? (this.velocidad = 0) : (this.velocidad -= num);
}
const a1 = new Auto();
console.log(a1.velocidad);

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad);

a1.frenar(2);
console.log(a1.velocidad);

a1.frenar(3);
// la velocidad quedaría en -2, así que se deja en 0
console.log(a1.velocidad);
