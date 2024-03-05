// Constructor Function

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

// Bisa membuat method diluar blok classnya
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// membuat instance baru
const objColor = new Color(12, 56, 78);
console.log(objColor.hex());
console.log(objColor.rgb());
