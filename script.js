//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  // Select the input field by its ID
  const inputField = document.getElementById('fname');
  
  // Add an event listener for the 'blur' event
  inputField.addEventListener('blur', function () {
    // Convert the value of the input field to uppercase
    inputField.value = inputField.value.toUpperCase();
  });
});
