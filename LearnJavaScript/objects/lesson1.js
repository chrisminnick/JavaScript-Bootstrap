/* Objects are JavaScript's complex data type, as opposed to the primitive data types (Number, String, Boolean, Undefined, and Null

An object is an unorder list of primitive data types (and sometimes reference data types) stored as name-value pairs.

Each item in the list is called a property (functions are called methods) and each property name has to be unique.

Numbers can be used as property names, but it's not generally recommended. If you do use numbers are property names, you have to access it using bracket notation.

Two common ways to create objects:
*/

//Object Literal
var taco = {
    //properties
    filling: "potato",
    salsa: "green",
    tortilla: "corn",
    //method
    whatItSays: function() {
        console.log("yummy!");
    }
}

taco.whatItSays(); //=> "yummy!"

//Object Constructor

var burrito = new Object();
burrito.filling = "bean";
burrito.salsa = "green";
tortilla: "flour";

burrito.whatItSays = function() {
    console.log("hungry!!");
}

burrito.whatItSays(); //=> "hungry!!"

// 3rd way to create Objects is with a constructor function

// Constructor function pattern

function MexicanFood(name,filling,salsa,howItSounds){
    this.name = name;
    this.filling = filling;
    this.salsa = salsa;
    this.howItSounds = howItSounds;
    this.saySound = function(){
        console.log(this.howItSounds);
    }
}

var enchillada = new MexicanFood("enchillada","chicken","red","great!");

enchillada.saySound(); //=> "great!"

// Prototype pattern

function Chips(){};
Chips.prototype.name = "Generic Chips";
Chips.prototype.salsa = "Any";
Chips.prototype.tortilla = "Corn";
Chips.prototype.howItSounds = "Crunch";
Chips.prototype.saySound = function() {
    console.log(this.howItSounds);
}

var myChip = new Chips();
myChip.saySound();



