// Utility types

// Partial<T> = comvierte todos las propiedades de un tipo en opcionales 

type Persona = {
    nombre : string;
    edad : number;
}

type persona = Partial<Persona>

let personaPartial : persona = {
    nombre: "jose"
}

console.log(personaPartial);

// Required<T> = convierte todas la propiedades de un tipo en obligatorias

type Animal = {
    raza : string;
    tamaño : number;
}

type animal = Required<Animal>;

let animalRequired : animal = {
    raza : "albino",
    tamaño : 123
}

console.log(animalRequired);

// Readonly<T> = comvierte las propiedades de un tipo en solo lectura

type Persona0 = {
    nombre : string;
    genero : string;
}

type persona0 = Readonly<Persona0>;

let person0 : persona0 = {
    nombre : "jose",
    genero : "masculino"
}

console.log(person0);

// Record<K, T> = crea un objeto tipo mapa  con claves K con valores de tipo T

type Roles = "admin" | "user";

type roles = Record<Roles, boolean>;

let roles1 : roles = {
    admin : true,
    user : false
}

console.log(roles1);

// Pick<T, K> = crea un tipo nuevo con solo algunas propiedades de otro tipo

type Carro = {
    color : string;
    modelo : number;
}

type carro = Pick<Carro, "color">

let car : carro = {
    color : "negro"
}

console.log(car);

// Omit<T, K> = crea un tipo nuevo excluyendo ciertas propiedades

type Person1 = {
    nombre : string;
    edad : number;
    direccion : string;
}

type person2 = Omit<Person1, "edad">;

let per : person2 = {
    nombre : "jose",
    direccion : "calle1"
}

console.log(per);

// Exclude<T, U> = Excluye T de los tipos que tambien esten en U

type Excluir = "a" | "b" | "c";

type excluir = Exclude<Excluir, "b">

let exc : excluir;
exc = "c";
exc = "a";

console.log(exc);

// Extract<T, U> = extrae de T los valores que tambien esten en U

type Extraer = "a" | "b" | "c";

type extraer = Extract<Extraer, "c" | "a">;

let ext : extraer;
ext = "a";
ext = "c";

console.log(ext);

// NonNullable<T> = elimina null y undefined de un tipo

type Nul = null | string | undefined

type nul = NonNullable<Nul>

// ReturnType<T> = extrae el tipo de retorno de ua funcion

function saludar() : string {
    return "Hola";
}

type R = ReturnType<typeof saludar>;

let res : R;
res = saludar();

console.log(res);

// Parameters<T> = extrae los tipos de parametros de una funcion en una tupla 

function sumar (a:number, b : string) : void {}

type p = Parameters<typeof sumar>;
