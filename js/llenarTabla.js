llenarTabla();

function llenarTabla() {
    var peticion = $.ajax({
        url: "https://sheetsu.com/apis/v1.0/40c2bb5aafcc",
        data: {

        },
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        dataType: 'json',

        success: function(response) {

            for (var i = 0; i < response.length; i++) {
                var card = $('<div>', {
                        'class': 'col s6'
                    }).append(
                        $('<div>', {
                            'id': 'card' + i,
                            'class': 'card'
                        }).append(
                            $('<div>', {
                                'class': 'card-image waves-effect waves-block waves-light'
                            }).append(
                                $('<img>', {
                                    'class': 'activator',
                                    'src': 'img/cover.png'
                                })),
                            $('<div>', {
                                'class': 'card-content'
                            }).append(
                                $('<span>', {
                                    'class': 'card-title activator grey-text text-darken-4',
                                    'id': 'cardtitle' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-more right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'description' + i
                                }),
                                $('<p>', {
                                    'id': 'category' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-bookmark left'
                                }).text(''))
                              ),
                            $('<div>', {
                                'class': 'card-reveal'
                            }).append(
                                $('<span>', {
                                    'class': 'card-title grey-text text-darken-4',
                                    'id': 'cardtitle_' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-close-round right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'description_' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-ios-book-outline right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'requerimientos' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-edit right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'tiempo' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-clock right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'lugar' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-location right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'fechat' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-calendar right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'facilitador' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-android-happy right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'contactof' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-ios-telephone right'
                                }).text('')),
                                $('<p>', {
                                    'id': 'areadisponible' + i
                                }).append($('<i>', {
                                    'class': 'icon ion-android-locate right'
                                }).text(''))
                              )
                        ))
                $('#tPizarra').append(card);
                $("#cardtitle" + i).append("<br>"+response[i]['Nombre_Actividad']);
                $("#description" + i).append(response[i]['Descripción']);
                $("#category" + i).append("<br>"+response[i]['Categoría']);
                $("#cardtitle_" + i).append("<br>"+response[i]['Nombre_Actividad']);
                $("#description_" + i).append("<br>Descripción: "+response[i]['Descripción']);
                $("#requerimientos" + i).append("<br>Requerimientos: "+response[i]['Requerimientos']);
                $("#tiempo" + i).append("<br>Tiempo Aproximado: "+response[i]['Tiempo aproximado']);
                $("#fechat" + i).append("<br>Fecha: "+response[i]['Fecha Tentativa']);
                $("#lugar" + i).append("<br>Lugar: "+response[i]['Lugar']);
                $("#facilitador" + i).append("<br>Facilitador(a): "+response[i]['Nombre']);
                $("#contactof" + i).append("<br>Contacto: "+response[i]['Contacto']);
                $("#areadisponible" + i).append("<br>Área de Disponibilidad: "+response[i]['Lugar de residencia-trabajo']);
            }
        },
        error: function(request, error) {
            alert(error);
        }
    });
}
