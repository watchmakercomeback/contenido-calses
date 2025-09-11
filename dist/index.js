"use strict";
// Utility types
Object.defineProperty(exports, "__esModule", { value: true });
let personaPartial = {
    nombre: "jose"
};
console.log(personaPartial);
let animalRequired = {
    raza: "albino",
    tamaño: 123
};
console.log(animalRequired);
let person0 = {
    nombre: "jose",
    genero: "masculino"
};
console.log(person0);
let roles1 = {
    admin: true,
    user: false
};
console.log(roles1);
let car = {
    color: "negro"
};
console.log(car);
let per = {
    nombre: "jose",
    direccion: "calle1"
};
console.log(per);
let exc;
exc = "c";
exc = "a";
console.log(exc);
let ext;
ext = "a";
ext = "c";
console.log(ext);
// ReturnType<T> = extrae el tipo de retorno de ua funcion
function saludar() {
    return "Hola";
}
let res;
res = saludar();
console.log(res);
//# sourceMappingURL=index.js.map