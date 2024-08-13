$(document).ready(function() {
    $('#login-btn').click(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if (username == '') {
            $('#error').html('Please enter your username').css("color","red");
        } else if (password == '') {
            $('#error').html('Please enter your password').css("color","red");
        } else if (confirmPassword == '') {
            $('#error').html('Please confirm your password').css("color","red");
        } else if (password !== confirmPassword) {
            $('#error').html('Passwords do not match').css("color","red");
        } else {
            $('#error').html('Login successful!').css("color","green");
            $('#login-form').submit();
            Swal.fire({
                title: "Login Successful !",
                text: "You have successfully logged in !",
                imageUrl: "https://unsplash.it/400/200",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
            
        }
    });
});