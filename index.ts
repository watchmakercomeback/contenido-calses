// Cuando usamos Partial<T>, le estamos diciendo a TypeScript que tome todas las 
// propiedades de un tipo T y las haga todas opcionales

//Mi ejemplo:
type User = {
  id: number;
  name: string;
  email: string;
};

type MyPartial<T> = {
    [K in keyof T]?: T[K];
}; //---> Esto es un mapeo de tipos que itera sobre cada propiedad K en T y la hace opcional.

type PartialUser = MyPartial<User>;

const usuaro1: PartialUser = {
    id: 1,
    name: "Juan"
    // email es opcional
};

console.log(usuaro1);


//Required<T> hace lo opuesto: hace que todas las propiedades sean obligatorias.
type UserProfile = {
  id: number;
  name: string;
  email?: string; // opcional
};

type RequiredUser = Required<UserProfile>;

type NoOptional<T> = {
    [K in keyof T]-?: T[K];
}  ; //---> El -? elimina el modificador opcional de cada propiedad.


// Readonly<T> toma un tipo y hace que todas sus propiedades sean inmutables, lo que significa que no se pueden modificar una vez que se han asignado.

type Persona = {
  nombre: string;
  edad: number;
};

type PersonaInmutable = Readonly<Persona>;

type PersonaInmutable2 = {
  readonly nombre: string;
  readonly edad: number;
};


type SoloLectura<T> = {
  readonly [P in keyof T]: T[P];
}; //---> El modificador readonly se aplica a cada propiedad.

// Pick<T, K>. Nos permite tomar un tipo T existente y escoger solo las propiedades que queremos para crear un nuevo tipo.
type Empleado = {
  nombre: string;
  edad: number;
  activo: boolean;
};

type PersonaBasica = Pick<Empleado, "nombre" | "edad">;

type Escoger<T, K extends keyof T> = {
  [P in K]: T[P]; 
}; //---> K extiende keyof T para asegurar que solo se puedan escoger propiedades que existen en T.

// omit T, K> es lo contrario de Pick. Nos permite crear un nuevo tipo excluyendo ciertas propiedades de un tipo existente.
type person = {
  nombre: string;
  edad: number;
  activo: boolean;
};

type PersonaSinEstado = Omit<person, "activo">;

type PersonaSinEstado2 = {
  nombre: string;
  edad: number;
};

type Omitir<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
}; //---> Exclude<keyof T, K> obtiene las claves de T que no están en K.

// Record<K, T> Crea un tipo de objeto genérico en el que K son las claves. T es el tipo de los valores.
type Registro<K extends keyof any, T> = {
  [P in K]: T;
};

type Semana = "lunes" | "martes" | "miércoles";

type Horario = Registro<Semana, string>;

type Horario2 = {
  lunes: string;
  martes: string;
  miércoles: string;
}; //---> Esto es equivalente a Record<Semana, string>.

// Si intentaras añadir una clave que no está en tu lista, TypeScript te daría un error. Esto es genial porque te asegura que tu objeto solo contiene las propiedades que tú definiste.

// Exclude<T, U> Toma un tipo T y excluye de él todas las propiedades que son asignables a U.
type Excluir<T, U> = T extends U ? never : T;

type Arcoiris = 'rojo' | 'naranja' | 'amarillo' | 'verde' | 'azul' | 'indigo' | 'violeta';

type ArcoirisSinVerde = Exclude<Arcoiris, 'verde'>;

// Extract<T, U> es la herramienta opuesta a Exclude<T, U>. Mientras que Exclude se deshace de lo que no quieres, Extract se queda solo con lo que quieres

type Extraer<T, U> = T extends U ? T : never;

type Arcoiris2 = 'rojo' | 'naranja' | 'amarillo' | 'verde' | 'azul' | 'indigo' | 'violeta';

type ColoresPrimarios = Extract<Arcoiris2, 'rojo' | 'amarillo' | 'azul'>;

// NonNullable<T> Elimina null y undefined de un tipo T.
type NoNulo<T> = T extends null | undefined ? never : T;

type TipoSeguro = NonNullable<string | number | null | undefined>;

type ArcoirisNublado = 
  | 'rojo' 
  | 'naranja' 
  | 'amarillo' 
  | 'verde' 
  | 'azul' 
  | 'indigo' 
  | 'violeta' 
  | null 
  | undefined;

  type ArcoirisLimpio = NonNullable<ArcoirisNublado>;

  type ArcoirisLimpio2 = 
  | 'rojo'
  | 'naranja'
  | 'amarillo'
  | 'verde'
  | 'azul'
  | 'indigo'
  | 'violeta';


// ReturnType<T> Toma una función y obtiene su tipo de retorno.
function sumar(a: number, b: number): number {
  return a + b;
}

type Resultado = ReturnType<typeof sumar>;

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;



