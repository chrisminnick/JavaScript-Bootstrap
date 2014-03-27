//create a function Foo()
//a good convention is to capitalize the first letter
//of functions intended to be used as function constructors.
//this will remind you to always use the 'new' keyword with it.
function Foo(){
	this.kind = 'foo';
}

//create foo, using the new keyword and the Foo() function
var foo = new Foo();

//when we use 'new', JavaScript inject an implicit
//reference to the new object being created in the form of the 
//'this' keyword. It also returns this reference at the end of 
//the function.

//foo is now an instance of Foo
console.log(foo instanceof Foo); //=> true
console.log(foo.kind); //=> 'foo'

//every function in JavaScript has a property called 'prototype'
function Foo(){

}

//Foo.prototype is the function prototype, not the real 
//prototype (__proto__)

function Person(name) {
	this.name = name;
}

Person.prototype.kind = 'person';

var chris = new Person('Chris');

chris.__proto__ == Person.prototype; // ==> true

console.log(chris.kind); //=> person

