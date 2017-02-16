$(document).ready(function(e) {
    $('#btnValidate').click(function() {
        var sEmail = $('#txtEmail').val();

        if ($.trim(sEmail).length == 0 || $("#fname").val()=="" || $("#lname").val()=="") {
            alert('Please fill in all fields');
            e.preventDefault();
        }

        if (validateEmail(sEmail)) {
            alert('Your email is valid, but unfortunately, I don\'t have a real subscription');
        }

        else {
            alert('Invalid Email Address');
            e.preventDefault();
        }
    });
});

$(document).ready(function(e) {
    $('#btnValidate_2').click(function() {
        var sEmail = $('#txtEmail_2').val();

        if ($.trim(sEmail).length == 0 || $("#fname_2").val()=="" || $("#lname_2").val()=="") {
            alert('Please fill in all fields');
            e.preventDefault();
        }

        if (validateEmail(sEmail)) {
            alert('Your email is valid, but unfortunately, I don\'t have a real subscription');
        }

        else {
            alert('Invalid Email Address');
            e.preventDefault();
        }
    });
});

function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (filter.test(sEmail)) {
        return true;
    }

    else {
        return false;
    }
}
