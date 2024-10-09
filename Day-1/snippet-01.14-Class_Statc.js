class MathHelper {
  static pi = 3.14;
  static square(number) {
    return number * number;
  }
}

console.log(MathHelper.square(5)); // Output: 25
console.log(MathHelper.pi);

let math = new MathHelper();
console.log(math.pi); // undefined