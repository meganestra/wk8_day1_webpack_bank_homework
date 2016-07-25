/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Bank = __webpack_require__(1);
	var sampleAccounts = __webpack_require__(2);
	var Account = __webpack_require__(3);
	var BankView = __webpack_require__(4);
	
	
	window.onload = function(){
	
	  var bank = new Bank();
	  var bankView = new BankView();
	
	  for (accountData of sampleAccounts){
	    bank.addAccount(new Account(accountData));
	  };
	
	  bankView.renderToBrowser(bank);
	
	
	};
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Bank = function(){
	  this.accounts = [];
	}
	
	Bank.prototype = {
	  addAccount: function(account){
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName:function(ownerName){
	    var foundAccount = null;
	    for (account of this.accounts) {
	      if(account.owner === ownerName){
	        foundAccount = account;
	      }
	    }
	    return foundAccount;
	  },
	  filteredAccounts: function(type){
	    if(!type) return this.accounts
	    var filteredAccounts = [];
	    for (account of this.accounts) {
	      if(type === account.type)
	        filteredAccounts.push(account);
	    }
	    return filteredAccounts;
	  },
	  totalCash:function(type){
	    var total = 0;
	    for (account of this.filteredAccounts(type)) {
	      total += account.amount;
	    }
	    return total;
	  },
	  accountAverage:function(){
	    return this.totalCash()/this.accounts.length;
	  },
	  addInterest: function(){
	    this.accounts.forEach(function(account){
	      var result = account.amount *= 1.1;
	      return Math.round(result);
	    })
	  }
	}
	
	
	module.exports = Bank;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "jay",
	    "amount": 125.50,
	    "type": "personal"
	  },
	  { "owner": "val",
	    "amount": 55125.10,
	    "type": "personal"
	  },
	  { "owner": "marc",
	    "amount": 400.00,
	    "type": "personal"
	  },
	  { "owner": "keith",
	    "amount": 220.25,
	    "type": "business"
	  },
	  { "owner": "rick",
	    "amount": 1.00,
	    "type": "business"
	  }
	]

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Account = function(params){
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;


/***/ },
/* 4 */
/***/ function(module, exports) {

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
	
	
	
	
	
	
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map