const BankAccount = function(accountNumber, accountHolderName, accountType, balance){
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountType = accountType;
    this.balance = balance;
}

// this is the method by which the user can see their current balance 
BankAccount.prototype.getBalance = function(){
    console.log(`${this.accountHolderName} current balance is ${this.balance}`);
}


// this is the method by which the accountHolder can deposit the amount
BankAccount.prototype.deposit = function(amount){
    this.balance = this.balance + amount;
}

// this is the method by which the accountHolder can withdraw the amount
BankAccount.prototype.withdraw = function(amount){
    if(amount > this.balance){
        console.log('sorry you dont have sufficient amount try again with lesser amount')
        return
    }
    this.balance = this.balance - amount;
}

const neerajAccount = new BankAccount(123456789, 'Neeraj Chinwan', 'savings', 1000);
neerajAccount.getBalance();
neerajAccount.deposit(200);
neerajAccount.getBalance();
neerajAccount.withdraw(1300);
neerajAccount.getBalance();
neerajAccount.withdraw(1200);
neerajAccount.getBalance();
neerajAccount.deposit(800);
neerajAccount.getBalance();
