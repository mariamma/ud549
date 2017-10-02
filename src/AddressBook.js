function AddressBook(){
	this.contacts = [];
}

AddressBook.prototype.addContact = function(contact){
	this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index){
	return this.contacts[index];
}


/*
var contactList = [];

var AddressBook = function(){

	this.addContact = function(contact){
		contactList.push(contact);
	};

	this.getContact = function(index){
		return contactList[index];
	};
};

*/