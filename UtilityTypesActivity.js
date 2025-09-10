var firstUser = {
    name: "Jose"
};
console.log(firstUser); // se ve que se pudo crear user1 sin necesidad de llenar todas las propiedades
console.log('\n');
var secondUser = {
    id: 2,
    name: "Jose",
    email: "jose@mail",
    password: "1234a"
    // si no pongo una de las propiedades me va a dar error
};
console.log(secondUser); // imprime el objeto
console.log('\n');
var thirdUser = {
    id: 3,
    name: "Ana",
    email: "ana@mail",
    password: "ana123"
};
// QUITAR COMENTARIO PARA COMPROBAR
// thirdUser.id = 4; // no se puede asignar a "id" porque es de solo lectura
// thirdUser.name = "Juan" // tampoco se puede cambiar el nombre
console.log(thirdUser);
console.log('\n');
var fourthUser = {
    id: 4,
    name: "Santiago",
    // email: "santiago@mail" // si intento esto no va a funcionar porque email no está dentro del Pick
};
console.log(fourthUser);
console.log('\n');
var fifthUser = {
    id: 5,
    name: "Rodrigo"
    // password: "Rodri11" // si intento esto no va a funcionar porque lo omití
};
console.log(fifthUser);
console.log("\n");
var routes = {
    "C#": ["Backend"],
    "Java": ["Spring"],
    "Node": ["Express"],
};
console.log(routes);
console.log("\n");
var routesList = "Java";
// const routesList2: RouteExclude = "C#"; // error ya que C# está excluido de la lista derutas
console.log(routesList);
console.log("\n");
var ExtractedRoute = "Node";
var ExtractedRoute2 = "C#";
// const ExtractedRoute3: ExtractRoute = "Java"; // error ya que solo se extrajeron las rutas Node y C#
console.log(ExtractedRoute + " " + ExtractedRoute2);
console.log("\n");
var firstValue = 1; // permite number
var secondValue = "Hello"; // permite string
// const thirdValue: canNotBeNull = null; // error, no permite null
// const fourthValue: canNotBeNull = undefined; // error, no permite undefined
console.log(firstValue + " " + secondValue);
console.log("\n");
function getUser() {
    return {
        id: 6,
        name: "Samuel"
    };
}
var sixthUser = getUser();
console.log(sixthUser);
