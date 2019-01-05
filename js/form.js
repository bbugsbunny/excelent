$('#page-loaded').html( (new Date).toLocaleTimeString() );

$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/so18-45@ukr.net",
        method: "POST",
        data: {
            name: $('#form').val(),
            comment: $('comment').val()
        },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('#msg').html('Thank You!');
    })
    .fail(function){
        $('#error').html('Sorry, there is an error!');
    })
}



