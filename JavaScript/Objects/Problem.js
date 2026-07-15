function customer(accountId,  name,  balance){
    let current = balance; 
    return{
        accountId: accountId,
        name: name,

        deposit: function(amount){
            current+=balance;
            console.log("Deposite: Rs"+ amount);
        },
        withdraw: function(amount){
            if(amount>current){
                console.log("Insufficienst Balance");
            }else{
                current-=balance;
                console.log("Withdraw Rs" + amount);
            }
        },
        checkBalance: function(){
            console.log("CurrentBalance: Rs"+ current)
        },
        CheckProfile: function(){
            console.log("-------Bank Profil---------");
            console.log("AccountId: ", this.accountId);
            console.log("Name: ", this.name);
            console.log("Account Balance: ", this.balance);
        }
    };
}
const account1 = customer(
    2408158555,
    "Laksh",
    353453599,
);

account1.CheckProfile();
account1.deposit(90000);
account1.withdraw(5000);
account1.checkBalance();