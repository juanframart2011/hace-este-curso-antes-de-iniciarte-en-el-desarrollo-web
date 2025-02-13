$('document').ready(function() {
    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        
        creaTarea({
            title: $('#tarea').val(),
            completed: false
        })
    });

    function renderTareas(items){

        items.forEach(function(tarea) {
            var tareaElement = $('<li/>');
            tareaElement.html('<span>' + tarea.title + '</span>');
            tareaElement.addClass('list-group-item');
            tareaElement.on('click', function() {
                $(this).append('<b style="float:right">✓</b>').appendTo($('#mi-lista-de-tareas-completadas')).off('click');
            });
            $('#mi-lista-de-tareas').append(tareaElement);
        });
    }

    function traerTareas(){
        $.ajax({
            url: 'http://localhost:3000/tareas',
            method: 'GET',
        }).then(function(response) {
            renderTareas(response);
        });
    }

    traerTareas();

    function creaTarea( item ){
        $.ajax({
            url: 'http://localhost:3000/tareas',
            method: 'POST',
            data: item
        }).then(function(item) {
            renderTareas(item);
        });
    }
});