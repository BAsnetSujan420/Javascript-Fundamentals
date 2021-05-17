var savingsAccount = {
    balance: 1000,
    interestRatePercent: 8,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = this.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            this.balance -= amount;
        }
    },
    
    printAccountSummary : function summary(){
        console.log(`Welcome!
        Your balance is currently $${this.balance} and
        your interest rate is ${this.interestRatePercent} %.`);
    }
};

savingsAccount.deposit(23000);
savingsAccount.withdraw(5000);
console.log(savingsAccount.printAccountSummary());
