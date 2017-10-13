describe('Address Book', function(){
	var addressBook, thisContact;

	beforeEach(function(){
		addressBook = new AddressBook();
		thisContact = new Contact();
	});

	it('should be able to add a contact', function(){
		addressBook.addContact(thisContact);
		expect(addressBook.getContact(0)).toBe(thisContact);	
	});

	it('should be able to delete a contact', function(){
		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);
		
		expect(addressBook.getContact(0)).not.toBeDefined();
	});
});

describe('Async Address Book', function(){
	var addressBook = new AddressBook();

	//call done function within the callback of getInitialContacts. 
	// This signals to the framework that our asynchronous function is
	// done doing what we need it to do and we can continue testing
	beforeEach(function(done){
		addressBook.getInitialContacts(function(){
			done();
		});
	});

// To signal framework, which of the  tests rely on async execution, use done
// We passed done to our function within our spec. We then called done after 
// our tests
	it('should grab initial contacts', function(done){
		expect(addressBook.initialComplete).toBe(true);
		done();
	});
});