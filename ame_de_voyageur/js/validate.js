// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Your name is required",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "No email, no message :)"
            },
            message: {
                required: "Um...yea, you have to write something to send this form."
            }
        },
        errorPlacement: function(error, element) {
          error.insertAfter(element.parent());
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"contact_form.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#alerts').removeClass('hidden');
                        $('#success_message').removeClass('hidden');
                        $('#success_message').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#alerts').removeClass('hidden');
                        $('#success_message').removeClass('hidden');
                        $('#error_message').fadeIn();
                    });
                }
            });
        }
    });
});
