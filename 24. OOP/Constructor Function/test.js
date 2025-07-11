// Constructor Function Name Start with Capital
function BankApplication(name, balance = 0) {
  this.name = name;
  this.balance = balance;

  this.deposit = (amount) => {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

let sahilAccount = new BankApplication("Sahil", 10000);
let vivekAccount = new BankApplication("Vivek");
console.log(sahilAccount.name);
console.log(sahilAccount.balance);
console.log(vivekAccount.name);
vivekAccount.deposit(500);
vivekAccount.withdraw(100);
console.log(vivekAccount.balance);

