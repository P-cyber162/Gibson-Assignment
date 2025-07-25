/*Create a class BankAccount with a 
private field #balance, and methods 
deposit(), withdraw(), and getBalance().*/

class Bankaccount{
    #balance;
    constructor(initialBalance= 0){
        this.#balance = initialBalance;
    }
    deposit(amount){
        if(amount>0){
            this.#balance+= amount;
        }
    }

    withdrawal(amount){
        if(amount>0 && amount<= this.#balance){
            this.#balance-=amount;
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const account = new Bankaccount(100);
account.deposit(50);
account.withdrawal(30);
console.log(account.getBalance());

