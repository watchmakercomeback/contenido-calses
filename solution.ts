//Utility types in TypeScript

//Partial type

type Parcial<T> = {
    [K in keyof T]?: T[K];
};

type Usuario = { id: number, nombre: string, correo: string };
type BorradorUsuario = Parcial<Usuario>;
// Resultado: { id?: number; nombre?: string; correo?: string }



//Required type


type Obligatorio<T> = {
    [K in keyof T]-?: T[K];
};

type Configuracion = { depuracion?: boolean, detallado?: boolean };
type ConfigStricteada = Obligatorio<Configuracion>;
// Resultado: { depuracion: boolean; detallado: boolean }



//Readonly type

type SoloLectura<T> = {
    readonly [K in keyof T]: T[K];
};

type Preferencias = { tema: string, idioma: string };
const configuracionApp: SoloLectura<Preferencias> = { tema: "oscuro", idioma: "es" };
// configuracionApp.tema = "claro"; // Error, no se puede modificar



//Pick type

type Elegir<T, K extends keyof T> = {
    [P in K]: T[P];
};

type Persona = { id: number; nombre: string; correo: string };
type ResumenUsuario = Elegir<Persona, "id" | "nombre">;
// Resultado: { id: number; nombre: string }



 //Omit type

type Omitir<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

type UsuarioPrivado = Omitir<Usuario, "correo">;
// Resultado: { id: number; nombre: string }


//Record type

type Registro<K extends keyof any, T> = {
    [P in K]: T;
};

type Roles = "admin" | "usuario" | "invitado";
type PermisosDeRol = Registro<Roles, string[]>;
// Resultado: { admin: string[]; usuario: string[]; invitado: string[] }


//Exclude type

type Excluir<T, U> = T extends U ? never : T;

type Ejemplo1 = Excluir<"a" | "b" | "c", "a" | "c">;
// Resultado: "b"


//Extract type

type Extraer<T, U> = T extends U ? T : never;

type Ejemplo2 = Extraer<"a" | "b" | "c", "a" | "d">;
// Resultado: "a"




//Nonullable type

type NoNulo<T> = T extends null | undefined ? never : T;

type Ejemplo3 = NoNulo<string | number | undefined | null>;
// Resultado: string | number



//Return type

type TipoRetorno<F extends (...args: any[]) => any> =
    F extends (...args: any[]) => infer R ? R : never;

function obtenerUsuario() {
    return { id: 1, nombre: "Alice" };
}

type RetornoUsuario = TipoRetorno<typeof obtenerUsuario>;
// Resultado: { id: number; nombre: string }
