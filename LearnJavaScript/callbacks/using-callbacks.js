/*
Callback functions allow you to:

Not repeat code (DRY—Do Not Repeat Yourself)
Implement better abstraction where you can have more generic functions that are versatile (can handle all sorts of functionalities)
Have better maintainability
Have more readable code
Have more specialized functions.

Common ways that callback functions are used:

For asynchronous execution (such as reading files, and making HTTP requests)
In Event Listeners/Handlers
In setTimeout and setInterval methods
For Generalization: code conciseness

Remember: basic idea of callback function is that you can pass a function as a parameter and then execute that function when you need to
*/

function Person (name,eyes,legs,locomotion) {
  this.name = name;
  this.eyes = eyes;
  this.legs = legs;
  this.locomotion = locomotion;
  this.sayHi = sayHi;
  function sayHi(){
  	console.log("Hi, my name is " + this.name + "!");
  }
}

var me = new Person("Chris",2,2,"swim");

console.log (me.locomotion);
me.sayHi();

function tellMeAboutIt(name,locomotion,callback) {
	console.log("processing " + name);
	callback(name,locomotion);
}

tellMeAboutIt("Joe","walking",function(name,locomotion){console.log("set " + name + " " + locomotion);});


