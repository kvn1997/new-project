$(document).ready(function() {

    var Kevin = {
        nombre: "Kevin",
        horas: 20,
        profesion: "pizzeria",
    }
    var Johnny = {
        nombre: "Johnny",
        horas: 40,
        profesion: "cocina",
    }
    var Fran = {
        nombre: "Fran",
        horas: 16,
        profesion: "sala",
    }
    var Anna = {
        nombre: "Anna",
        horas: 40,
        profesion: "barra",
    }
    var Rosario = {
        nombre: "Rosario",
        horas: 20,
        profesion: "cocina",
    }
    var Andrea = {
        nombre: "Andrea",
        horas: 40,
        profesion: "pizzeria",
    }
    var Juan = {
        nombre: "Juan",
        horas: 16,
        profesion: "barra",
    }
    var Lalla = {
        nombre: "Lalla",
        horas: 40,
        profesion: "sala",
    }
    var Jimmy = {
        nombre: "Jimmy",
        horas: 16,
        profesion: "cocina",
    }
    var Olga = {
        nombre: "Olga",
        horas: 40,
        profesion: "sala",
    }
    cocina = [Jimmy, Rosario, Johnny];
    pizzeria = [Kevin, Andrea];
    barra = [Anna, Juan];
    var sala = [Olga, Lalla, Fran];

    var empleados = [Kevin, Johnny, Fran, Anna, Olga, Jimmy, Rosario, Andrea, Lalla, Juan];

    // var horas = [empleados[0].horas, empleados[1].horas,
    //     empleados[2].horas, empleados[3].horas
    // ];


    function resta_horas_sala(empleado) {
        var cant_horas_man = $("#horas-mañana-sala").val();
        var cant_horas_tar = $("#horas-tarde-sala").val();
        sala[empleado].horas = sala[empleado].horas - cant_horas_man;
        sala[empleado].horas = sala[empleado].horas - cant_horas_tar;

        console.log(sala[empleado].nombre + " te lalla quedan: " + sala[empleado].horas + " horas disponibles");

    }
    var profesion = [empleados[0].profesion, empleados[1].profesion,
        empleados[2].profesion, empleados[3].profesion
    ];

    $("#btn-1").click(function(empleado) {
        console.log("CLICK");
        var cant_personal_mañana = $("#numero-personas-sala-mañana").val();
<<<<<<< HEAD
        var cant_personal_noche = $("#numero-personas-sala-noche").val();

        var random_al = -1;
        for (var i = 0; i < cant_personal_mañana; i++) {
            var c = 0;

            var random = Math.floor((Math.random() * 5) + 1);
            console.log("Random: " + random);
            console.log("Random AL: " + random_al);

            if (random == random_al) {
                c = c + 1;
                var random = Math.floor((Math.random() * 5) + 1);
                console.log("Random del IF: " + random);
                console.log("Esta es C: " + c);
            }


            //console.log("Random si ent: " + random_al);
            //console.log("Random AL 1: " + random_al);

=======

        for (var i = 0; i < cant_personal_mañana; i++) {
            var random = Math.floor((Math.random() * 3) + 0);
            console.log("Las horas que tiene " + sala[random].nombre + " son: " + sala[random].horas);
            var cant_personal_noche = $("#numero-personas-sala-noche").val();
            resta_horas_sala(random);
        }
        for (var i = 0; i < cant_personal_noche; i++) {
            var random = Math.floor((Math.random() * 3) + 0);
            console.log("Las horas que tiene " + sala[random].nombre + " son: " + sala[random].horas);
>>>>>>> 40ed90189a4ab8eda7b4463a4af6d9836b9bf659

            console.log("TARDE: Las horas que tiene " + empleados[random].nombre + " son: " + empleados[random].horas);
            resta_horas_sala(random);
            var random_al = random;


            //console.log("Random AL: " + random_al);

<<<<<<< HEAD
        }






        // for (var i = 0; i < cant_personal_noche; i++) {
        //     var random = Math.floor((Math.random() * 5) + 1);
        //     console.log("Las horas que tiene " + empleados[random].nombre + " son: " + empleados[random].horas);
        //     resta_horas_sala(random);

        // }
    });

    // var random = Math.floor((Math.random() * 5) + 1);
    // function resta_horas_sala(random);
=======
>>>>>>> 40ed90189a4ab8eda7b4463a4af6d9836b9bf659

        }


    });


    var lunes = [];
    var martes = [];
    var miercoles = [];
    var jueves = [];
    var viernes = [];
    var sabado = [];
    var domingo = [];
    var hora_Lunes = 4;
    var hora_Martes = 4;
    var hora_Miercoles = 4;
    var hora_Jueves = 4;
    var hora_Viernes = 4;
    var hora_Sabado = 4;
    var hora_Domingo = 4;

    $("#sala").css("display", "flex");
    $("#formulario-1").css("margin-top", 17);
    $("#formulario-2").css("margin-top", 17);
    $("#formulario-3").css("margin-top", 17);
    $("#formulario-4").css("margin-top", 17);
    $("#formulario-5").css("margin-top", 17);
    $("#formulario-6").css("margin-top", 17);
    $("#formulario-7").css("margin-top", 17);
    $("#formulario-8").css("margin-top", 17);
    $("#Pizzeria").css("display", "flex");
    $("#Cocina").css("display", "flex");
    $("#Barra").css("display", "flex");
    $("#dias").css("color", "black");
    $("#dias p").css("color", "blue");
    $("button").css("width", "70px");
});