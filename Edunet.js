function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;

  if (name === "") {
      alert("Name must be filled out");
      return false;
  }
  if (email === "") {
      alert("Email must be filled out");
      return false;
  }
  if (phone === "") {
      alert("Phone number must be filled out");
      return false;
  }
  if (message === "Message") {
      alert("Message must be filled out");
      return false;
  }

  if (!validateEmail(email)) {
      alert("Invalid email format");
      return false;
  }

  if (!validatePhone(phone)) {
      alert("Invalid phone number format");
      return false;
  }

  return true;
}

function validateEmail(email) {
  let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

function validatePhone(phone) {
  let re = /^\d{10}$/;
  return re.test(phone);
}
