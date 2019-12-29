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
// console.log(empleados[0].horas);
// cocina.push(empleados.);
// console.log(cocina);
var horas = [empleados[0].horas, empleados[1].horas,
    empleados[2].horas, empleados[3].horas
];
var profesion = [empleados[0].profesion, empleados[1].profesion,
    empleados[2].profesion, empleados[3].profesion
];
var semana = [40];
if (horas[0] < semana) {
    semana.push(empleados[0]);
}
var lunes = [];
var martes = [];
var miercoles = [];
var jueves = [];
var viernes = [];
var sabado = [];
var domingo = [];
$(document).ready(function() {
    $("#dias").css("display", "flex");
});
var input1 = $("#input1");