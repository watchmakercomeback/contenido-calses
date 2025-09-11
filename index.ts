// Cambio mínimo para commit y push
// 📌 Tipos primitivos en TypeScript

// string
let nombre: string = "Carlos";

// number (soporta enteros y decimales)
let edad: number = 25;
let pi: number = 3.1416;

// boolean
let esActivo: boolean = true;

// null → representa la ausencia intencional de un valor
let valorNulo: null = null;

// undefined → significa que una variable fue declarada pero no inicializada
let valorIndefinido: undefined = undefined;

// symbol → valores únicos e inmutables (útiles para identificar propiedades únicas)
let idUnico: symbol = Symbol("id");

// bigint → números enteros muy grandes
let numeroGrande: bigint = 9007199254740991n;

// any → desactiva el tipado, puede ser cualquier cosa (no recomendado salvo excepciones)
let variableFlexible: any = "Hola";
variableFlexible = 123;
variableFlexible = true;

// unknown → similar a any, pero más seguro, requiere comprobación de tipo
let valorDesconocido: unknown = "podría ser cualquier cosa";

// 📌 Diferencia entre null y undefined:
// - null → "no hay valor", lo asignas explícitamente.
// - undefined → "no se ha definido valor", normalmente pasa cuando declaras una variable pero no le asignas nada.

// Ejemplo:
let a: string | null = null;        // valor intencionalmente vacío
let b: string | undefined;          // no se ha inicializado aún

// 📌 Ejemplos con arreglos
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Ana", "Luis", "Carlos"];
let booleanos: Array<boolean> = [true, false, true]; 

// Arreglo con tipos mixtos usando unión de tipos
let mezcla: (string | number)[] = ["texto", 42, "otro", 100];

// Tupla → arreglo con longitud y tipos fijos
let tuplaEjemplo: [string, number, boolean] = ["ID_123", 99, true];

// ==============================
// 1. Definir tipos propios
// ==============================
type Punto = {
  x: number;
  y: number;
};

let coordenada: Punto = { x: 10, y: 20 };

// ==============================
// 2. Extender tipos con intersección (&)
// ==============================
type ConDireccion = { direccion: string };
type Persona = { nombre: string; edad: number };

type Cliente = Persona & ConDireccion;

let cliente: Cliente = {
  nombre: "Luis",
  edad: 40,
  direccion: "Calle 123",
};

// ==============================
// 3. Tipos de objetos con funciones como propiedades
// ==============================
type Calculadora = {
  sumar: (a: number, b: number) => number;
  restar: (a: number, b: number) => number;
};

let calc: Calculadora = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
};

// ==============================
// 4. Tipos literales (valores específicos)
// ==============================
type Direccion = "norte" | "sur" | "este" | "oeste";

let mover: Direccion;
mover = "norte";  // ✅
mover = "oeste";  // ✅
// mover = "arriba"; // ❌ Error

// ==============================
// 5. Unión de tipos
// ==============================
type Id = string | number;

let userId: Id;
userId = 123;       // ✅
userId = "ABC123";  // ✅

// ==============================
// 6. Alias de tipos
// ==============================
type Email = string;
type Edad = number;

let correo: Email = "user@example.com";
let edadUsuario: Edad = 25;

// ==============================
// 7. Propiedades opcionales y readonly
// ==============================
type Config = {
  readonly appName: string;
  version?: string;
};

let config: Config = { appName: "MiApp" };
// config.appName = "Otra"; // ❌ Error
config.version = "1.0.0";    // ✅

// ==============================
// 8. Utility Types (funcionan sobre cualquier type)
// ==============================

// Partial<T> → vuelve todas las props opcionales
type ParcialPersona = Partial<Persona>;
let p1: ParcialPersona = { nombre: "Ana" }; // edad opcional

// Omit<T, K> → excluye propiedades
type PersonaSinEdad = Omit<Persona, "edad">;
let p2: PersonaSinEdad = { nombre: "Carlos" };

// Pick<T, K> → elige solo ciertas propiedades
type SoloNombre = Pick<Persona, "nombre">;
let p3: SoloNombre = { nombre: "Lucía" };

// Readonly<T> → convierte todo en solo lectura
type PersonaInmutable = Readonly<Persona>;
let p4: PersonaInmutable = { nombre: "Eva", edad: 22 };
// p4.edad = 23; // ❌ Error

