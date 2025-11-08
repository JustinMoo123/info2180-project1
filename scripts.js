document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const messageDiv = document.querySelector('.message');

  if (!form || !messageDiv) return; 

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.querySelector('#email');
    const email = emailInput.value.trim();

    if (email) {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    } else {
      messageDiv.textContent = "Please enter a valid email address.";
    }

    emailInput.value = '';
  });
});
