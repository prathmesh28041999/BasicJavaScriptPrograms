/**
Truthy and Falsy Assignment
Truthy and falsy evaluations open a world of short-hand possibilities!
Say you have a website and want to take a user’s username to make a personalized greeting. 
Sometimes, the user does not have an account, making the username variable falsy. 
The code below checks if username is defined and assigns a default string if it is not:
 */

let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger
