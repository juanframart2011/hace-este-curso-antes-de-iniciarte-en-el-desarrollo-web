$('document').ready(function() {
    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        var tarea = $('<li/>');

        tarea.html('<span>' + $('#nueva-tarea').val() + '</span>');

        tarea.addClass('list-group-item');

        tarea.on('click', function() {
            $(this).append('<b style="float:right">✓</b>').appendTo($('#mi-lista-de-tareas-completadas')).off('click');
        });

        $('#mi-lista-de-tareas').append(tarea);
    });
});