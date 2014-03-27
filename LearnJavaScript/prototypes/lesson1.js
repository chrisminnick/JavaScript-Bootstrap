//create a person object
var person = {};

//create a chris object
var chris = {};

//assign person as the prototype of chris
chris.__proto__ = person;

//chris doesn't know what kind he is
console.log(chris.kind); // => undefined

//define a kind property for person
person.kind = 'person';

//chris knows what kind he is
console.log(chris.kind); // => 'person'

//what happens when you update a property that exists in the prototype?
chris.kind = 'chris';

console.log(chris.kind); //=> 'chris'

console.log(person.kind); //=> 'person'

//values set to the object don't affect the prototype...makes sense

