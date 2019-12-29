$(document).ready(function() {
    var Kevin = {
        horas: 20,
        profesion: "pizzero",
    }
    var Johnny = {
        horas: 40,
        profesion: "cocinero",
    }
    var Fran = {
        horas: 16,
        profesion: "sala",
    }
    var Anna = {
        horas: 40,
        profesion: "barra",
    }
    cocina = [];
    pizzeria = [];
    barra = [];
    sala = [];
    var empleados = [Kevin, Johnny, Fran, Anna];
    var horas = [empleados[0].horas, empleados[1].horas,
        empleados[2].horas, empleados[3].horas
    ];
    var profesion = [empleados[0].profesion, empleados[1].profesion,
        empleados[2].profesion, empleados[3].profesion
    ];
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

    $("#dias").css("display", "flex");
    $("#dias").css("text-align", "center");
    $("#dias").css("color", "black");
    $("#dias p").css("color", "blue");
    $("button").css("width", "70px");



});