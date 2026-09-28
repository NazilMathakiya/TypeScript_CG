class BankAccount {
    static TotalBankHoldingAmount: number = 0
    static TotalAcountHolder: number = 0

    constructor(
        public id: number,
        public name: string,
        public amount: number
    ){
        console.log("constructor executed!!");
        BankAccount.TotalBankHoldingAmount += amount
        BankAccount.TotalAcountHolder++
    }

    static{
        console.log("static block");
        
    }

    credit(amount:number){
        BankAccount.TotalBankHoldingAmount += amount
        this.amount += amount
    }
    debit(amount:number){
        BankAccount.TotalBankHoldingAmount -= amount
        this.amount -= amount
    }

    getAccountInfo(){
        console.log(`name: ${this.name}\nMy_Balance: ${this.amount}`)
    }
    static bankDetail(){
        console.log(`total account: ${BankAccount.TotalAcountHolder}\ntotal bank holding is:${BankAccount.TotalBankHoldingAmount}`);
        
    }
}

const b1 = new BankAccount(1, "nazil", 5000)
const b2 = new BankAccount(1, "nazil", 1000)

b1.credit(2500)
b2.credit(1500)

b1.getAccountInfo()
b2.getAccountInfo()
// 
b1.debit(4004)
b2.debit(1020)

b1.getAccountInfo()
b2.getAccountInfo()

BankAccount.bankDetail
