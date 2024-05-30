class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

class BankAccount extends Person {
  #balance;
  constructor(name, balance) {
    super(name);
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(
        `${amount} withdrawn from the account. New balance: ${this.#balance}`
      );
    } else {
      console.log('Insufficient funds');
    }
  }
  getBalance() {
    console.log(`Current balance:${this.#balance}`);
  }
}

const account1 = new BankAccount('Asiye', 1000);

console.log(account1);
account1.sayName();
account1.deposit(500);
account1.getBalance();
account1.withdraw(600);
account1.getBalance();
account1.deposit(300)
account1.getBalance();
