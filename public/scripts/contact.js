$(function() {

    $('#contact-form').on('submit', function(e) {
        if(!e.isDefaultPrevented()) {

            $.ajax({
                type: 'POST',
                url: '/contact',
                data: $(this).serialize(),
                success: function(data) {

                    // recieve type of message
                    var message_alert = 'alert-' + data.type;
                    var message_text = data.message;

                    var alert_box = `
                        <div class='alert ${message_alert} alert-dismissable'>
                            <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;></button>${message_text}</div>
                    `;

                    if(message_alert && message_text) {
                        // inject alert into .message
                        $('#contact-form').find('.messages').html(alert_box)
                        $('.#contact-form')[0].reset()
                    }
                }
            });
            return false;
        }
    });
});