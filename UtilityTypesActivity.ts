//Utility Types
// creo un tipo base llamado User
type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

// Partial convierte todas las propiedades del tipo User en opcionales
// creo mi propio Partial
type MyPartial<T> = {
    [K in keyof T]?: T[K];
};

type PartialUser = MyPartial<User>;

const firstUser: PartialUser = { 
    name: "Jose" 
};

console.log(firstUser); // se ve que se pudo crear user1 sin necesidad de llenar todas las propiedades
console.log('\n')


// Required convierte todas las propiedades de un tipo en obligatorias
// creo mi propio Required
type MyRequired<T> = {
    [K in keyof T]-?: T[K];
};

type RequiredUser = MyRequired<User>;

const secondUser: RequiredUser = { 
    id: 2, 
    name: "Jose", 
    email: "jose@mail", 
    password: "1234a"
    // si no pongo una de las propiedades me va a dar error
};

console.log(secondUser); // imprime el objeto
console.log('\n')


// Readonly permite crear un tipo con todas las propiedades de otro tipo como solo lectura
// creo mi propio Readonly
type MyReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadOnlyUser = MyReadOnly<User>;

const thirdUser: ReadOnlyUser = {
    id: 3,
    name: "Ana",
    email: "ana@mail",
    password: "ana123"
};

// QUITAR COMENTARIO PARA COMPROBAR
// thirdUser.id = 4; // no se puede asignar a "id" porque es de solo lectura
// thirdUser.name = "Juan" // tampoco se puede cambiar el nombre

console.log(thirdUser);
console.log('\n')


// Pick seleccionar un subconjunto de propiedades de un tipo.
// creo mi propio Pick
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type PickUser = MyPick<User, "id" | "name">; // selecciono solo las propiedades id y name del tipo User

const fourthUser: PickUser = {
    id: 4,
    name: "Santiago",
    // email: "santiago@mail" // si intento esto no va a funcionar porque email no está dentro del Pick
};

console.log(fourthUser);
console.log('\n')


// Omit crear un tipo excluyendo ciertas propiedades de otro tipo.
// creo mi propio Omit
type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

type OmitUser = MyOmit<User, "password" | "email"> // no quiero mostrar ni el email ni la contraseña

const fifthUser: OmitUser = {
    id: 5,
    name: "Rodrigo"
    // password: "Rodri11" // si intento esto no va a funcionar porque lo omití
};

console.log(fifthUser);
console.log("\n");


// Record construir un tipo a partir de un conjunto de claves y un tipo de valor. Claves K y valores T
// creo mi propio Record
type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
};

type Routes =  "C#" | "Java" | "Node";

type UserRoute = MyRecord<Routes, string[]>;

const routes: UserRoute = {
    "C#": ["Backend"],
    "Java": ["Spring"],
    "Node": ["Express"],
};

console.log(routes);
console.log("\n")


//Exlude
// creo mi propio Exclude
type MyExclude<T, U> = T extends U ? never : T;

type RouteExclude = MyExclude<Routes, "C#">;

const routesList: RouteExclude = "Java";
// const routesList2: RouteExclude = "C#"; // error ya que C# está excluido de la lista derutas
console.log(routesList);
console.log("\n");


// Extract, conserva solo los que coincidan.
// creo mi propio Extract
type MyExtract<T, U> = T extends U ? T : never;

type ExtractRoute = MyExtract<Routes, "Node" | "C#">;

const ExtractedRoute: ExtractRoute = "Node";
const ExtractedRoute2: ExtractRoute = "C#";
// const ExtractedRoute3: ExtractRoute = "Java"; // error ya que solo se extrajeron las rutas Node y C#

console.log(ExtractedRoute + " " + ExtractedRoute2);
console.log("\n");


// NonNullable elimina null y undefined de un tipo
// creo mi propio NonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T;

type canBeNull = string | number | null | undefined;
type canNotBeNull = MyNonNullable<canBeNull>;

const firstValue: canNotBeNull = 1; // permite number
const secondValue: canNotBeNull = "Hello"; // permite string
// const thirdValue: canNotBeNull = null; // error, no permite null
// const fourthValue: canNotBeNull = undefined; // error, no permite undefined


console.log(firstValue + " " + secondValue);
console.log("\n");


// ReturnType
// creo mi propio ReturnType
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function getUser() {
    return {
        id: 6,
        name: "Samuel"
    };
}

type UserReturn = MyReturnType<typeof getUser>; // en este momento UserReturn equivale a { id: number; name: string }

const sixthUser: UserReturn = getUser();

console.log(sixthUser)