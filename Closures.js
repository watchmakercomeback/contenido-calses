// //hoisting
// console.log(miNombre);
// var miNombre = "Juan";
// if (true) {
//     var miEdad = 30;
// }
// console.log(miEdad);
// if (true) {
//     var miEdad2 = 40;
// }
// console.log(miEdad2);
// function sum1(a, b) {
//     return a + b;
// }
// var sum2 = function (a, b) { return a + b; };
// console.log(sum1(10, 20));
// console.log(sum2(10, 20));
// //Ejercicio hoisting
// function externa() {
//     console.log("1)", x);
//     var x = 10;
//     function interna() {
//         console.log("2)", x);
//         var x = 20;
//         console.log("3)", x);
//         console.log("4)", suma(2, 3));
//         var resta = function (a, b) {
//             return a - b;
//         };
//         function suma(a, b) {
//             return a + b;
//         }
//     }
//     interna();
// }
// externa();
// //closures
// function func1() {
//     var a = 10;
//     return function func2() {
//         console.log(a);
//     };
// }
// var f = func1();
// console.log("Space");
// var _loop_1 = function (i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// };
// for (var i = 0; i <= 3; i++) {
//     _loop_1(i);
// }
// //Closures con parámetros
// function createElement(type) {
//     return function (contenido) {
//         return "<".concat(type, ">").concat(contenido, "</").concat(type, ">");
//     };
// }
// var h1 = createElement("h1");
// var p = createElement("p");
