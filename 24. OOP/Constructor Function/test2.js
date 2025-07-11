function Car(brand) {
  this.brand = brand;
  this.print = () => this.brand;
}
const car1 = new Car("Honda");
console.log(car1.print());
