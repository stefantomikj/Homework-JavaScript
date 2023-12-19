let submitButton = document.getElementById("myButton");
//let firstName = document.getElementById("firstName");
//let lastName = document.getElementById("lastName");
//let email = document.getElementById("email");
//let password = document.getElementById("password");

let result1 = document.getElementById("result");
let users = [];
function UserCredentials(firstName, lastName, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.userInfo = function () {
    return `User ${this.firstName} ${this.lastName} ${this.email}`;
  };
}
submitButton.addEventListener("click", UserCredentials);
let newUserCredentials = new Object(UserCredentials);
console.log(newUserCredentials);
users.push({ UserCredentials });
console.log(users);
