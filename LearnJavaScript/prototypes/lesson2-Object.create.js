/** Object.create is the next-simplest way to
    assign prototypes to objects. It's available 
    in ECMAScript5 and can be shimmed for older
    browsers using es5-shim.
**/

// make a person object and give it a property
var person = {
	kind: 'person'
}

// create a new object with person as its prototype
var chris = Object.create(person);

console.log(chris.kind); // => 'person'

// pass an object to Object.create to add specfic properties to the new object
var edward = Object.create(person, {age: {value: 10}});
console.log("edward.age = " + edward.age); // => '10'

console.log(Object.getPrototypeOf(chris)); // => person


