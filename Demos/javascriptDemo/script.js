let age = 20;
const name = "Kristine";

console.log("hi my name is " + name);
console.log(`Hi, use my name ${name}`);

const pin = "1234";

if(pin === 1234){
    console.log("payment accepted")
}
else{
    console.log("wrong pin")
}

for(let i = 0; i < 5; i++){
    console.log("Scanning items number ", i)
}

/*create a loop that prints only even numbers from 1-10*/

let shoppingCart = ["Milk", "egg", "beans"];
shoppingCart.pop();
shoppingCart.push("wine");

shoppingCart.forEach(item =>{
    console.log(`item: ${item}`)
})

/*function logItems(item) {
    console.log(`item: ${item}`)
}
shoppingCart.forEach(logItems)
*/

const person = {
    name: "Jorgen",
    age: 24,
    greet: function() {
        console.log("Hi i am " + this.name + " and I am shopping beans.")
    }
}
person.greet();
person.name ="Jorgen the bean lover";
person.greet();

/*Task: Create a student object with: name, age and course.
Add a function that logs a sentence about the student.
 */


/*const message = document.getElementById("message");


const userInput = document.getElementById("userInput");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    message.innerHTML = `Welcome to the store ${userInput.value}`
})
 */




function entering(){
    return new Promise((resolve, reject) => {
        const success = true;
        if(success){
            resolve("Enter the grocery store");
        }
        else{
            reject("You didn't go to the grocery store today!")
        }
    })
}

function groceries(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if(success){
                resolve("Get groceries");
            }
            else{
                reject("You didn't get any groceries!")
            }
        }, 2000)
    })
}

function checkout(){
    return new Promise((resolve, reject) => {
        const success = true;
        if(success){
            resolve("Pay!");
        }
        else{
            reject("You thief!")
        }
    })
}

async function goShopping(){
    const enteringResult = await entering();
    console.log(enteringResult);

    const groceriesResult = await groceries();
    console.log(groceriesResult);

    const checkoutResult = await checkout();
    console.log(checkoutResult);

    console.log("You can go home now")
}

goShopping();
