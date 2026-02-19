// Create an object with a simple function
const example = {
    name: "Test Object",
    sayHello: function () {
        return "Hello!";
    }
};

// Convert to JSON
const jsonString = JSON.stringify(example);

console.log(jsonString);
// Function is gone