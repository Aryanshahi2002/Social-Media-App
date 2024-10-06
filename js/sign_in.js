$(document).ready(function() {

    // Function to generate random hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to change the background color every 3 seconds
    function changeBackgroundColor() {
        $('body').css('background-color', getRandomColor());
    }

    // Change background color every 3 seconds (3000 ms)
    setInterval(changeBackgroundColor, 1000);

    // Get the submit button
    let submitButton = $('#submit-button');

    // Add event listener to the submit button of sign-in page
    submitButton.on('click', function(e) {
        e.preventDefault();

        if ($('#email-field').val() === '' || $('#password-field').val() === '') {
            new Noty({
                theme: 'sunset',
                text: 'Fill up all fields',
                progressBar: true,
                timeout: 1000,
                layout: 'topRight'
            }).show();
            return;
        }

        window.location.replace('./html/home.html');
    });
});
