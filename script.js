document.getElementById('health-goals-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    // Add your form submission logic here
    
    // Redirect to the specified link
    window.location.href = 'https://www.gethealthscore.com/fn-form/skin-health-canada';
});
