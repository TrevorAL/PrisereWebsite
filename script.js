function showEmailForm() {
    document.getElementById('emailFormContainer').style.display = 'block';
    document.getElementById('emailError').innerText = '';
    document.getElementById('successMessage').style.display = 'none';
}

document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        return;
    }

    // Reset the form elements after successful submission
    this.reset();

    // You can handle the email collection and counting here (e.g., save to a database)
    // For this example, we will just show a success message
    document.getElementById('successMessage').style.display = 'block';
    emailInput.value = '';
    document.getElementById('emailError').innerText = '';
});

document.getElementById('joinWaitlistLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link (i.e., scrolling to the top of the page)

    // Additional code to handle showing the email collection form
    showEmailForm();
    document.getElementById('joinWaitlistLink').classList.add('clicked');

    // Scroll to the email response form
    const emailFormContainer = document.getElementById('emailFormContainer');
    emailFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}