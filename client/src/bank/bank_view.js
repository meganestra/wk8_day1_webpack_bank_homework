var BankView = function() {

  this.displayBankTotal = function(bank){

    var totalDisplay = document.getElementById("total");
    totalDisplay.innerText = "Total cash: £" + bank.totalCash().toFixed(2);
  },

  this.displayAccounts = function(bank){

    var businessAccountsList = document.getElementById("businessAccounts");
    var personalAccountsList = document.getElementById("personalAccounts");
    var bankAccounts = bank.accounts;

    businessAccountsList.innerHTML = "";
    personalAccountsList.innerHTML = "";

    bankAccounts.forEach(function(account){

      if(account.type === "business"){
        var businessAccountListItem = document.createElement("li")
        businessAccountListItem.innerText = "Owner: " + account.owner + " : £" + account.amount.toFixed(2)
        businessAccountsList.appendChild(businessAccountListItem)
      }else if(account.type === "personal"){
        var personalAccountsListItem = document.createElement("li")
        personalAccountsListItem.innerText = "Owner: " + account.owner + " : £" +account.amount.toFixed(2)
        personalAccountsList.appendChild(personalAccountsListItem)
      }
    })
  },

  this.addInterestButton = function(bank){

    var button = document.getElementById("button");
    button.onclick = function(){
      bank.addInterest();
      this.displayAccounts(bank);
      this.displayBankTotal(bank);
    }.bind(this);
  },

  this.renderToBrowser = function(bank){
    this.displayBankTotal(bank);
    this.displayAccounts(bank);
    this.addInterestButton(bank);
  }

};

module.exports = BankView;







