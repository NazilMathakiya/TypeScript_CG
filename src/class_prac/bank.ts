abstract class BankAccount {

    private static totalBankAccountHoldingAmount: number = 0
    private static totalAccountHolder: number = 0

    constructor(
        public accountNumber: number,
        public accountHolder: string,
        protected amount: number,
        protected accountType: "current" | "saving"
    ) {
        BankAccount.totalBankAccountHoldingAmount += amount
        BankAccount.totalAccountHolder++
    }

    abstract credit(amount: number): void
    abstract debit(amount: number): void

    getAccountInfo() {
        console.log(`
            Account Number: ${this.accountNumber}
            Account Holder: ${this.accountHolder}
            Account Type: ${this.accountType}
            Balance: ${this.amount}
        `)
    }

    

    static BankAccountDetail() {
        console.log(`
Total Accounts: ${BankAccount.totalAccountHolder}
Total Amount: ${BankAccount.totalBankAccountHoldingAmount}
        `)
    }

    protected static addTotalAmount(amount: number) {
        BankAccount.totalBankAccountHoldingAmount += amount
    }
}



class SavingAccount extends BankAccount {

    constructor(
        accountNumber: number,
        accountHolder: string,
        amount: number
    ) {
        super(accountNumber, accountHolder, amount, "saving")
    }

    credit(amount: number): void {
        this.amount += amount

        BankAccount.addTotalAmount(amount)
    }

    debit(amount: number): void {
        if (this.amount >= amount) {
            this.amount -= amount

            BankAccount.addTotalAmount(-amount)
        } else {
            console.log("Insufficient Balance")
        }
    }
}



class CurrentAccount extends BankAccount {

    constructor(
        accountNumber: number,
        accountHolder: string,
        amount: number
    ) {
        super(accountNumber, accountHolder, amount, "current")
    }

    credit(amount: number): void {
        this.amount += amount

        BankAccount.addTotalAmount(amount)
    }

    debit(amount: number): void {
        this.amount -= amount

        BankAccount.addTotalAmount(-amount)
    }
}


const savingAccount1 = new SavingAccount(1, "Jilan", 10000)

const currentAccount2 = new CurrentAccount(2, "Rahul", 10000)

const currentAccount3 = new CurrentAccount(3, "Aman", 10000)

const savingAccount4 = new SavingAccount(4, "Ali", 10000)


// Transactions

savingAccount1.credit(1000)
savingAccount1.debit(2000)

currentAccount2.credit(1000)
currentAccount2.debit(2000)

currentAccount3.credit(5000)
currentAccount3.debit(6000)


savingAccount1.getAccountInfo()
currentAccount2.getAccountInfo()
currentAccount3.getAccountInfo()

BankAccount.BankAccountDetail()