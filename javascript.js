const newDiv = document.createElement("div");
newDiv.className = "structure";
document.body.appendChild(newDiv);

const sidebar = document.createElement("div");
sidebar.id = "sidebar";

const sideBarStripe = document.createElement("div");
sideBarStripe.id = "sideBarStripe";

const sideBarStripeLogo = document.createElement("img");
sideBarStripeLogo.id = "sideBarStripeLogo";
sideBarStripeLogo.src = "odin-lined.png"; // Set the source of the image here

const sideBarStripeHeader = document.createElement("h1");
sideBarStripeHeader.id = "sideBarStripeHeader";
sideBarStripeHeader.textContent = "ODIN";

const sections = document.createElement("div");
sections.id = "sections";

const topSection = document.createElement("div");
topSection.id = "top";

const topText = document.createElement("h1");
topText.id = "topText";
topText.innerHTML =
  "This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams.<br>Sign up <em>now</em> to get started.<br><br>You <em>know</em> you want to.";

const midSection = document.createElement("div");
midSection.id = "mid";

const midText = document.createElement("h1");
midText.id = "midText";
midText.innerHTML = "Let's do this!";

const form = document.createElement("form");
form.id = "form";
form.method = "post";
form.action = "index.html";

// First fieldset for User Information
const fieldset1 = document.createElement("fieldset");
fieldset1.id = "leftForm";

// First Name Label and Input
const firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("for", "firstName");
firstNameLabel.textContent = "FIRST NAME";
fieldset1.appendChild(firstNameLabel);

const firstNameInput = document.createElement("input");
firstNameInput.type = "text";
firstNameInput.id = "firstName";
firstNameInput.name = "firstName";
firstNameInput.required = true;
fieldset1.appendChild(firstNameInput);

// Email Label and Input
const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.textContent = "EMAIL";
fieldset1.appendChild(emailLabel);

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.name = "email";
emailInput.required = true;
fieldset1.appendChild(emailInput);

// Password Label and Input
const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.textContent = "PASSWORD";
fieldset1.appendChild(passwordLabel);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.className = "password";
passwordInput.name = "password";
passwordInput.required = true;
fieldset1.appendChild(passwordInput);

// Append first fieldset to the form
form.appendChild(fieldset1);

// Second fieldset for Additional Information
const fieldset2 = document.createElement("fieldset");
fieldset2.id = "rightForm";

// Last Name Label and Input
const lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "lastName");
lastNameLabel.textContent = "LAST NAME";
fieldset2.appendChild(lastNameLabel);

const lastNameInput = document.createElement("input");
lastNameInput.type = "text";
lastNameInput.id = "lastName";
lastNameInput.name = "lastName";
lastNameInput.required = true;
fieldset2.appendChild(lastNameInput);

// Phone Number Label and Input
const phoneLabel = document.createElement("label");
phoneLabel.setAttribute("for", "phone");
phoneLabel.textContent = "PHONE NUMBER";
fieldset2.appendChild(phoneLabel);

const phoneInput = document.createElement("input");
phoneInput.type = "tel";
phoneInput.id = "phone";
phoneInput.name = "phone";
phoneInput.required = true;
fieldset2.appendChild(phoneInput);

// Confirm Password Label and Input
const confirmPasswordLabel = document.createElement("label");
confirmPasswordLabel.setAttribute("for", "confirmPassword");
confirmPasswordLabel.textContent = "CONFIRM PASSWORD";
fieldset2.appendChild(confirmPasswordLabel);

const confirmPasswordInput = document.createElement("input");
confirmPasswordInput.type = "password";
confirmPasswordInput.className = "password";
confirmPasswordInput.name = "confirmPassword";
confirmPasswordInput.required = true;
fieldset2.appendChild(confirmPasswordInput);

// Append second fieldset to the form
form.appendChild(fieldset2);

const botSection = document.createElement("div");
botSection.id = "bot";

// Submit Button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.id = "submitBtn";
submitButton.textContent = "Create Account";

const botText = document.createElement("h1");
botText.id = "botText";
botText.innerHTML = "Already have an account? <a href='#'>Log in</a>";

// Append both elements to newDiv
newDiv.appendChild(sidebar);
sidebar.appendChild(sideBarStripe);
sideBarStripe.appendChild(sideBarStripeLogo);
sideBarStripe.appendChild(sideBarStripeHeader);
newDiv.appendChild(sections);
sections.appendChild(topSection);
topSection.appendChild(topText);
sections.appendChild(midSection);
midSection.appendChild(midText);
sections.appendChild(botSection);
midSection.appendChild(form);
botSection.appendChild(submitButton);
botSection.appendChild(botText);

document.getElementById("submitBtn").addEventListener("click", function () {
  if (!form.checkValidity()) {
    alert("Please fill out the form correctly.");
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match.");
  } else {
    //form.submit();
    console.log("Form submitted.");
    console.log("First Name: " + firstNameInput.value);
    console.log("Last Name: " + lastNameInput.value);
    console.log("Email: " + emailInput.value);
    console.log("Phone: " + phoneInput.value);
    console.log("Password: " + passwordInput.value);
    console.log("Confirm Password: " + confirmPasswordInput.value);
    form.reset();
  }
});
