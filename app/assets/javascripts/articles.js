$(document).ready(function () {
    var socket = io.connect('http://' + window.location.hostname + ':3002');
    $("#new_article").submit(function () {
        var article = {
            title: $("#article_title").val(),
            content: $("#article_content").val()
        };


        // socket.emit('new_count_message', {
        //     new_count_message: data.new_count_message
        // });
        socket.emit('new_article', article);

        // $.ajax({
        //     type: "POST",
        //     url: "/messages",
        //     data: dataString,
        //     dataType: "json",
        //     cache: false,
        //     crossDomain: false,
        //     success: function (data) {

        //         $("#load").hide();
        //         $("#message_name").val('');
        //         $("#message_email").val('');
        //         $("#message_subject").val('');
        //         $("#message_message").val('');

        //         if (data) {

        //             data_location = data.location;

        //             $("#notif").html(data.notif);

        //             var socket = io.connect('http://' + window.location.hostname + ':3002');
        //             socket.emit('new_count_message', {
        //                 new_count_message: data.new_count_message
        //             });

        //             socket.emit('new_article', {
        //                 name: data_location.name,
        //                 email: data_location.email,
        //                 subject: data_location.subject,
        //                 message: data_location.message,
        //                 created_at: data_location.created_at,
        //                 id: data_location.id
        //             });

        //         } else if (data.status == false) {
        //             $("#message_name").val(data_location.name);
        //             $("#message_email").val(data_location.email);
        //             $("#message_subject").val(data_location.subject);
        //             $("#message_message").val(data_location.message);
        //             $("#notif").html(data.notif);
        //         }
        //         spinner.stop(spinner_div);

        //     }, error: function (xhr, status, error) {
        //         alert('Error: ' + error);
        //     },
        // });
        // return false;
    });
  socket.on( 'new_articles', function( data ) {
    $("#notification").html(data.title + " has been created, refresh page, please");
  });
});
