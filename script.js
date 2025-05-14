// Adding an event listener for form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Fetching input values and trimming spaces
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
  
    // Getting error divs for each field
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
  
    // Clearing previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
  
    // Flag to track if all validations pass
    let isValid = true;
  
    // Name validation: only letters and spaces allowed
    if (!/^[a-zA-Z ]+$/.test(name)) {
      nameError.textContent = 'Name should contain only letters.';
      isValid = false;
    }
  
    // Email validation: basic email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'Invalid email format.';
      isValid = false;
    }
  
    // Phone validation: exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      phoneError.textContent = 'Phone number should be 10 digits.';
      isValid = false;
    }
  
    // If all validations pass, show success alert
    if (isValid) {
      alert('Signup Successful!');
    }
  });
  