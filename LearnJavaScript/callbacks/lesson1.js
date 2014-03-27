
// define a global variable
var friends = ["Mike", "Stacy", "Andy", "Rick"];

/* because functions are first-class objects
   we can treat functions like objects and we can
   pass them around like variables and return them
   in functions and use them in other functions.
 */

// here, we pass an anonymouse function to the forEach method 
// as a parameter.
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});

// the containing function can execute the callback anytime.


// another global variable
var allUserData = [];

/* we can also pass a named function as a parameter */

function logStuff (userData) {

	//check whether the parameter is a string or object
    if (typeof userData === "string")
    {
    	console.log(userData);

    }
    else if (typeof userData === "object")
    {
    	for (var item in userData) {
    		console.log(item + ": " + userData[item]);

    	}
    }
}

// a function that takes two parameters
// the last is a callback function

function getInput(options, callback) {
    allUserData.push(options);

    // Make sure the callback is a function
    if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
        callback(options);
    }
}

// when we call getInput, we pass logstuff as a parameter
//so logStuff will be the function that will be called back
// (executed) inside the getInput function

getInput ({name:"Rich", legs: "two"}, logStuff);



