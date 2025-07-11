function Car(brand) {
  this.brand = brand;
}
Car.prototype.print = function () {
  return this.brand;
};
const car1 = new Car("Honda");
console.log(car1.print());
