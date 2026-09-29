// new account/object => id, name, amount  | credit and debit
// class level \ Bank Amount

type AccountType = "Saving" | "Current";

abstract class BankAccount {
	private static _totalBankHoldingAmount: number = 0;
	private static totalAccountHolder: number = 0;

	public static bank_name: string;

	protected abstract accountType: AccountType;

	constructor(
		private readonly accountNumber: number,
		private _accountHolder: string,
		private _balance: number,
	) {
		// console.log("Contructor Executed");
		BankAccount._totalBankHoldingAmount += _balance;
		BankAccount.totalAccountHolder++;
	}

	set accountHolder(name: string) {
		if (name.length < 3) {
			console.log("Name is not valid");
		}

		this._accountHolder = name.toUpperCase();
	}

	get balance() {
		return this._balance;
	}
	set balance(amt: number) {
		this._balance = amt;
	}

	set totalBankHoldingAmount(amt: number) {
		BankAccount._totalBankHoldingAmount = amt;
	}
	get totalBankHoldingAmount() {
		return BankAccount._totalBankHoldingAmount;
	}

	static {
		BankAccount.bank_name = "SBI";
	}

	abstract credit(amount: number): void;
	abstract debit(amount: number): void;

	getAccountInfo() {
		console.log(
			`Name: ${this._accountHolder}\nMy_Balance: ${this._balance}\nAccountType: ${this.accountType}\n`,
		);
	}

	static bankDetail() {
		console.log(
			`Bank Name is: ${BankAccount.bank_name}\nTotal Acounts: ${BankAccount.totalAccountHolder}\nTotal Amount: ${BankAccount._totalBankHoldingAmount}`,
		);
	}
}

class SavingAccount extends BankAccount {
	protected accountType: AccountType = "Saving";

	credit(amount: number) {
		super.totalBankHoldingAmount += amount;
		super.balance += amount;
	}
	debit(amount: number) {
		super.totalBankHoldingAmount -= amount;
		super.balance -= amount;
	}
}
class CurrentAccount extends BankAccount {
	protected accountType: AccountType = "Current";

	credit(amount: number) {
		super.totalBankHoldingAmount += amount;
		super.balance += amount;
	}
	debit(amount: number) {
		super.totalBankHoldingAmount -= amount;
		super.balance -= amount;
	}
}


const banckAccounts = [
	{
		accountObj: new SavingAccount(1, "satya", 0),
		transactions: [2000, -2000, 3001, 5000, -6000],
	},
	{
		accountObj: new CurrentAccount(1, "Rahul", 0),
		transactions: [4000, -2000, 3000, 9000, -6000],
	},
];


banckAccounts.forEach((bankAccount) => {
	const obj = bankAccount.accountObj
	const transactions = bankAccount.transactions

	transactions.forEach((amount) => {
		const absAmount = Math.abs(amount);
		if (amount > 0) {
			obj.credit(absAmount);
		} else {
			obj.debit(absAmount);
		}
	});
	obj.getAccountInfo();
});