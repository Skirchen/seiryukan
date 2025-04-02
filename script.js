// Add an event listener to the contact form for handling submissions
document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target; // Reference to the form element
    const formData = new FormData(form); // Collect form data

    try {
        // Send the form data to the specified endpoint using a POST request
        const response = await fetch('https://formspree.io/f/mnnpvyne', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // Specify the response format
            }
        });

        if (response.ok) {
            // Show a success message and reset the form
            document.getElementById('form-message').style.display = 'block';
            form.reset();
        } else {
            // Alert the user if the submission fails
            alert('Oops! Something went wrong.');
        }
    } catch (error) {
        // Log the error and alert the user in case of a network issue
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

// Add sticky behavior to the Contact Us navigation
window.addEventListener('scroll', () => {
    const contactButton = document.getElementById('contact-button');
    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
        contactButton.classList.add('sticky');
    } else {
        contactButton.classList.remove('sticky');
    }
});

// Add behavior to hide the Contact Us button when the contact section is in view
window.addEventListener('scroll', () => {
    const contactButton = document.getElementById('contact-button');
    const contactSection = document.getElementById('contact');
    const contactRect = contactSection.getBoundingClientRect();

    // Check if the contact section is in view
    if (contactRect.top <= window.innerHeight && contactRect.bottom >= 0) {
        contactButton.style.display = 'none'; // Hide the button
    } else {
        contactButton.style.display = 'block'; // Show the button
    }
});