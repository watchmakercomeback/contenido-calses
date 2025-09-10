//En JS Vanilla no existen los tipos, por esto se usa TypeScript y sus utilities types, las cuales serán explicadas una a una:

//Partial<T>: Esta utilidad convierte todos los campos primarios del objeto en NO obligatorios. Se puede ver de la siguiente manera:
type User = {
    id: string;
    name: string;
    age: number;
};
type UserPatch = Partial<User>;

//Pero si esto no existiera, sería así:
type Optional<T> = {
    [K in keyof T]?: T[K];
};

//Required<T>: Esta utilidad convierte todos los campos (primarios o no) en OBLIGATORIOS. Se puede ver de la siguiente manera:
type Config = { debug?: boolean, verbose?: boolean }
type StrictConfig = Required<Config>;

//Pero si esto no existiera, sería así:
type NoOptional<T> = {
    [K in keyof T]-?: T[K];
}

//Readonly<T>: Marca una propiedad como sólo lectura, es decir, no se puede editar. Se puede ver de la siguiente manera:
type Settings1 = { readonly theme: string, language: string }
const appSettings: Readonly<Settings1> = { theme: "dark", language: "es" }

//Pero si esto no existiera, sería así:
type MakeReadonly<T> = { readonly [K in keyof T]: T[K] };

//Pick<T>: seleccionar un subtipo con ciertas propiedades. Por ejemplo:
//Hiciste una figura con muchos accesorios: sombrero, gafas, mochila, botas.
//Con Pick usas un cortador y te quedas solo con el sombrero y las gafas, ignorando el resto.
//Es la misma plastilina de esos accesorios, solo que recortaste el subconjunto.
//Se puede ver de la siguiente manera:
type PersonType = { id: number; name: string; email: string };
type UserPreview = Pick<PersonType, "id" | "name">;

//Pero si esto no existiera, sería así:
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

//Omit<T>: crea un tipo excluyendo ciertas propiedades de otro tipo, es decir, podría crear T excluyendo las propiedades de K. Se puede ver de la siguiente manera:
type UserPrivate = Omit<User, "email">;

//Pero si esto no existiera, sería así:
type MyOmit2<T, K extends keyof any> = {
    [P in keyof T as Exclude<P, K>]: T[P]
};

//Record<T>: Construye un tipo, este tipo tiene de claves el conjunto T y TODOS los valores son del tipo T. Por ejemplo:
//Tienes 3 cajitas etiquetadas: admin, doctor, patient.
//La regla es: en cada cajita debe ir una bolita de plastilina del mismo tipo (p. ej., roja).
//Si falta una cajita con su bolita, está mal.
//Se puede ver de la siguiente manera:
type Roles = "admin" | "user" | "guest";
type RolePermissions = Record<Roles, string[]>;

//Pero si esto no existiera, sería así:
type MyRecord<K extends PropertyKey, T> = {
    [P in K]: T;
};

//Exclude<T>: Crea un tipo T donde quita todos los miembros que estén en U
type U1 = "a" | "b" | "c";
type R3 = Exclude<U1, "a" | "x">;   // "b" | "c"

//Pero si esto no existiera, sería así:
type ExcludeMapped<T extends keyof any, U extends keyof any> = {
    [K in T as K extends U ? never : K]: K
}[T];

//Extract<T>: toma de T solo los miembros que sean asignables a U. Se puede pensar en la intersección de conjuntos a nivel de uniones. Se puede ver de la siguiente manera:
type A = { id: string; name: string; age: number };
type B = { id: string; email: string };
type CommonKeys = Extract<keyof A, keyof B>; // "id"

//Pero si esto no existiera, sería así:
type ExtractMapped<T, U> = {
    [K in T & (string | number | symbol)]: K extends U ? K : never
}[T & (string | number | symbol)];

//NonNullable<T>: Elimina Null o Undefined de un tipo T. Se puede ver de la siguiente manera:
type A1 = string | null | undefined;
type R1 = NonNullable<A1>;

//Pero si esto no existiera, sería así:
type MyNonNullable<T> = T extends null | undefined ? never : T;

//ReturnType<T>: obtiene el tipo de retorno de una función. Se puede ver de la siguiente manera:
function sum(a: number, b: number) { return a + b; }
type SumR = ReturnType<typeof sum>;

//Pero si esto no existiera, sería así:
type MyReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => infer R ? R : never;