// Membuat Object dengan Class

class Color {
  //constructor akan dijalankan pertama kali ketika membuat instance
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  // method berada dalam cakupan class
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  colorName() {
    console.log("The color name is " + this.name);
  }
}

// new object/instance
const blueSky = new Color(185, 243, 252, "Blue Sky");
console.log(blueSky.rgb());
console.log(blueSky.rgba());
console.log(blueSky.hex());
console.log(blueSky.colorName());

// Extends : mewariskan sifat general'
// Super
class Peliharaan {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makan() {
    return `${this.name} sedang makan...`;
  }
}

class Kucing extends Peliharaan {
  constructor(name, age, lives) {
    super(name, age);
    this.lives = lives;
  }

  meong() {
    return "Meonnng!";
  }

  live() {
    return `${this.name} mempunyai ${this.lives} nyawa`;
  }
}

class Anjing extends Peliharaan {
  bark() {
    return "Guk! Guk! Guk!";
  }
}

let kitten = new Kucing("mbul", 3, 9);
let puppy = new Anjing("dwight", 2);
console.log(kitten.meong());
console.log(kitten.makan());
console.log(kitten.live());
console.log(puppy.bark());
console.log(puppy.makan());
