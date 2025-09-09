//hoisting
console.log(miNombre);
var miNombre = "Juan";

if(true){
    var miEdad = 30;
}
console.log(miEdad);

if(true){
    let miEdad2 = 40;
}
console.log(miEdad2)


function sum1(a:number, b:number){
    return a + b;
}
const sum2 = (a:number, b:number)=> a + b;

console.log(sum1(10, 20));
console.log(sum2(10, 20));

//Ejercicio hoisting
function externa() {
  console.log("1)", x); 
  var x = 10;
  function interna() {
    console.log("2)", x);
    var x = 20;
    console.log("3)", x);
    console.log("4)", suma(2, 3)); 
    var resta = function (a: number, b: number) {
      return a - b;
    };

    function suma(a: number, b: number) {
      return a + b;
    }
  }
  interna();
}
externa();



//closures
function func1(){
    let a = 10;
    return function func2(){
        console.log(a);
    }
}

let f = func1();

console.log("Space");

for(let i=0; i<=3; i++){
    setTimeout(function(){
        console.log(i);
    }, 100)
}











//Closures con parámetros
function createElement(type:string){
    return function(contenido:string){
        return `<${type}>${contenido}</${type}>`
    }
}

let h1 = createElement("h1");
let p = createElement("p");