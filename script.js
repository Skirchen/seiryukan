document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/mnnpvyne', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            document.getElementById('form-message').style.display = 'block';
            form.reset();
        } else {
            alert('Oops! Something went wrong.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});