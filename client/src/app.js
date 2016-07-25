var Bank = require('./bank/bank.js');
var sampleAccounts = require('./sample.json');
var Account = require('./bank/account.js');
var BankView = require('./bank/bank_view.js');


window.onload = function(){

  var bank = new Bank();
  var bankView = new BankView();

  for (accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  };

  bankView.renderToBrowser(bank);


};



