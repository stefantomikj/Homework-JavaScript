let submitButton = document.getElementById("myButton");
let fNameField = document.getElementById("firstName");
let lNameField = document.getElementById("lastName");
let mailField = document.getElementById("email");
let passField = document.getElementById("password");

let result1 = document.getElementById("result");
let users = [];
function UserCredentials(firstName, lastName, email, password) {
  this.fNameProp = firstName;
  this.lNameProp = lastName;
  this.mailProp = email;
  this.passProp = password;
}

submitButton.addEventListener("click", function () {
  let firstNameInput = fNameField.value;
  let lastNameInput = lNameField.value;
  let emailInput = mailField.value;
  let passwordInput = passField.value;
  let newUserCredentials = new UserCredentials(
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput
  );
  console.log(newUserCredentials);
  // users.push({ newUserCredentials });
  // console.log(users);
});
