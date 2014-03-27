function User(firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}
var admin = new User('chris','minnick');
console.log (admin.firstname);