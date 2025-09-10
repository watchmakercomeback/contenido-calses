// --------------------------------------
// 1. Awaited<Type>
// --------------------------------------
async function ejercicio1() {
type A = Awaited<Promise<string>>;
type B = Awaited<Promise<Promise<number>>>;
type C = Awaited<boolean | Promise<number>>;

const a: A = await Promise.resolve("Hola");
const b: B = await Promise.resolve(Promise.resolve(42));
const c: C = Math.random() > 0.5 ? true : await Promise.resolve(10);

console.log("1. Awaited:", a, b, c);
}
ejercicio1();

// --------------------------------------
// 2. Partial<Type>
// --------------------------------------
type Producto = {
id: number;
nombre: string;
precio: number;
}

function actualizarProducto(base: Producto, cambios: Partial<Producto>) {
return { ...base, ...cambios };
}

const productoActualizado = actualizarProducto(
{ id: 1, nombre: "Zapato", precio: 100 },
{ precio: 80 }
);
console.log("2. Partial:", productoActualizado);

// --------------------------------------
// 3. Required<Type>
// --------------------------------------
type Config = {
debug?: boolean;
port?: number;
}

type ConfigCompleta = Required<Config>;

const config: ConfigCompleta = {
debug: true,
port: 8080,
};
console.log("3. Required:", config);

// --------------------------------------
// 4. Readonly<Type>
// --------------------------------------
type Usuary = {
    nombre: string;
}

const Usuary: Readonly<Usuary> = { nombre: "Lucía" };
console.log("4. Readonly:", Usuary.nombre);
// --------------------------------------
// 5. Record<Keys, Type>
// --------------------------------------
type Dias = "lunes" | "martes" | "miércoles";

const tareas: Record<Dias, string[]> = {
lunes: ["estudiar"],
martes: ["trabajar"],
miércoles: ["descansar"],
};
console.log("5. Record:", tareas);

// --------------------------------------
// 6. Pick<Type, Keys>
// --------------------------------------
type Persona = {
nombre: string;
edad: number;
email: string;
}

type Contacto = Pick<Persona, "nombre" | "email">;

const personaContacto: Contacto = {
nombre: "Ana",
email: "ana@mail.com",
};
console.log("6. Pick:", personaContacto);

// --------------------------------------
// 7. Omit<Type, Keys>
// --------------------------------------
type Empleado = {
id: number;
nombre: string;
salario: number;
}

type EmpleadoVisible = Omit<Empleado, "salario">;

const emp: EmpleadoVisible = {
id: 1,
nombre: "Carlos",
};
console.log("7. Omit:", emp);

// --------------------------------------
// 8. Exclude<UnionType, ExcludedMembers>
// --------------------------------------
type Colores = "rojo" | "verde" | "azul";
type SinVerde = Exclude<Colores, "verde">;

const color: SinVerde = "rojo";
console.log("8. Exclude:", color);

// --------------------------------------
// 9. Extract<Type, Union>
// --------------------------------------
type Acciones = "crear" | "leer" | "editar";
type SoloLectura = Extract<Acciones, "leer" | "editar">;

const accion: SoloLectura = "editar";
console.log("9. Extract:", accion);

// --------------------------------------
// 10. NonNullable<Type>
// --------------------------------------
type PosibleValor = string | null | undefined;
type ValorSeguro = NonNullable<PosibleValor>;

const texto: ValorSeguro = "algo";
console.log("10. NonNullable:", texto);

// --------------------------------------
// 11. Parameters<Type>
// --------------------------------------
function sumar(a: number, b: number) {
return a + b;
}

type SumarParams = Parameters<typeof sumar>;

function logParametros(...args: SumarParams) {
console.log("11. Parameters:", sumar(...args));
}
logParametros(3, 4);

// --------------------------------------
// 12. ConstructorParameters<Type>
// --------------------------------------
class PersonaClase {
constructor(public nombre: string, public edad: number) {}
}

type PersonaParams = ConstructorParameters<typeof PersonaClase>;
const params: PersonaParams = ["Juan", 30];

const persona = new PersonaClase(...params);
console.log("12. ConstructorParameters:", persona);

// --------------------------------------
// 13. ReturnType<Type>
// --------------------------------------
function crearUsuario() {
return { id: 1, nombre: "Mario" };
}

type Usuario = ReturnType<typeof crearUsuario>;
const usuarioNuevo: Usuario = crearUsuario();
console.log("13. ReturnType:", usuarioNuevo);

// --------------------------------------
// 14. InstanceType<Type>
// --------------------------------------
class Vehiculo {
ruedas = 4;
tipo = "auto";
}

type VehiculoTipo = InstanceType<typeof Vehiculo>;
const miVehiculo: VehiculoTipo = new Vehiculo();
console.log("14. InstanceType:", miVehiculo);

// --------------------------------------
// 15. NoInfer<Type>
// --------------------------------------
function crearSemaforo<C extends string>(
colores: C[],
predeterminado?: NoInfer<C>
) {
if (predeterminado && !colores.includes(predeterminado)) {
    throw new Error("Color no válido");
}
console.log("15. NoInfer:", colores, predeterminado);
}

crearSemaforo(["rojo", "verde", "amarillo"], "verde"); 
