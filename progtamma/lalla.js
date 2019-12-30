$(document).ready(function() {
    var Kevin = {
        nombre: "Kevin",
        horas: 20,
        profesion: "sala",
    }
    var Johnny = {
        nombre: "Johnny",
        horas: 40,
        profesion: "sala",
    }
    var Fran = {
        nombre: "Fran",
        horas: 16,
        profesion: "sala",
    }
    var Anna = {
        nombre: "Anna",
        horas: 40,
        profesion: "sala",
    }
    var Rosario = {
        nombre: "Rosario",
        horas: 20,
        profesion: "sala",
    }
    var Andrea = {
        nombre: "Andrea",
        horas: 40,
        profesion: "sala",
    }
    var Juan = {
        nombre: "Juan",
        horas: 16,
        profesion: "sala",
    }
    var Lalla = {
        nombre: "Lalla",
        horas: 40,
        profesion: "sala",
    }
    var Jimmy = {
        nombre: "Jimmy",
        horas: 16,
        profesion: "sala",
    }
    var Olga = {
        nombre: "Olga",
        horas: 40,
        profesion: "sala",
    }
    cocina = [];
    pizzeria = [];
    barra = [];
    sala = [Kevin, Johnny, Anna, Fran, Rosario, Olga, Jimmy, Juan, Andrea, Lalla];

    var empleados = [Kevin, Johnny, Fran, Anna, Olga, Jimmy];
    var horas = [empleados[0].horas, empleados[1].horas,
        empleados[2].horas, empleados[3].horas
    ];

    $("#btn-1").click(function() {
        console.log($("#1").val());
        var valor = $("#1").val();
        var random = Math.floor((Math.random() * 5) + 1);
        if (valor < empleados[random].horas) {
            console.log(random);
            console.log(empleados[random].nombre);
            console.log(empleados[random].horas);
        }

    });





    // var profesion = [empleados[0].profesion, empleados[1].profesion,
    //     empleados[2].profesion, empleados[3].profesion
    // ];
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

    $("#Lunes").css("display", "flex");
    $("#Martes").css("display", "flex");
    $("#Miercoles").css("display", "flex");
    $("#Jueves").css("display", "flex");
    $("#dias").css("color", "black");
    $("#dias p").css("color", "blue");
    $("button").css("width", "70px");


});