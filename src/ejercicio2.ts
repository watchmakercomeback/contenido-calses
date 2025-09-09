

// Awaited<T>
// Desempaqueta Promises (incluso anidados)
type A = Awaited<Promise<string>>;               // string
type B = Awaited<Promise<Promise<number>>>;      // number
type C = Awaited<boolean | Promise<number>>;     // boolean | number

async function traerMensaje(): Promise<string> {
  return "Tranquilo, mijo.";
}
type Mensaje = Awaited<ReturnType<typeof traerMensaje>>; // string

// Partial<T>
// Vuelve todas las props opcionales
interface Pedido {
  producto: string;
  cantidad: number;
  barrio: string;
}
function actualizarPedido(p: Pedido, cambios: Partial<Pedido>): Pedido {
  return { ...p, ...cambios };
}
const p1: Pedido = { producto: "arepa", cantidad: 3, barrio: "Laureles" };
const p2 = actualizarPedido(p1, { cantidad: 5 });

// Required<T>
// Vuelve todas las props requeridas (opuesto a Partial)
interface Props {
  a?: number;
  b?: string;
}
const objOk: Required<Props> = { a: 1, b: "hola" };
// const objMal: Required<Props> = { a: 1 };

// Readonly<T>
// Hace las props solo lectura
interface Todo { title: string; }
const td: Readonly<Todo> = { title: "Eliminar inactivos" };
// td.title = "Cambiar"; // ❌ readonly

// Record<K, T>
// Crea un objeto a partir de claves y un tipo de valor
type Barrio = "Laureles" | "Envigado" | "Belén";
interface InfoBarrio { estrato: number; esPopular: boolean; }
const barrios: Record<Barrio, InfoBarrio> = {
  Laureles: { estrato: 5, esPopular: false },
  Envigado: { estrato: 4, esPopular: false },
  Belén: { estrato: 3, esPopular: true },
};
console.log("Envigado estrato:", barrios.Envigado.estrato);

// Pick<T, K>
// Toma solo ciertas props
interface Usuario {
  id: string;
  nombre: string;
  telefono: string;
  admin: boolean;
}
type UsuarioPublico = Pick<Usuario, "id" | "nombre">;
const up: UsuarioPublico = { id: "123", nombre: "Luisa" };

// Omit<T, K>
// Toma todo menos ciertas props (opuesto a Pick)
type UsuarioSinTelefono = Omit<Usuario, "telefono">;
const us: UsuarioSinTelefono = { id: "1", nombre: "Ana", admin: false };

// Exclude<Union, Members>
// Saca miembros de una unión
type Snacks = "arepa" | "buñuelo" | "empanada";
type SinBuñuelo = Exclude<Snacks, "buñuelo">; // "arepa" | "empanada"

// Extract<Type, Union>
// Extrae solo los miembros que apliquen
type SoloArepa = Extract<Snacks, "arepa" | "mazorca">; // "arepa"

// NonNullable<T>
// Quita null y undefined
type TN = NonNullable<string | null | undefined>; // string

// Parameters<T>
// Obtiene tupla de parámetros de una función
function enviarNotificacion(barrio: string, urgente: boolean) { /* ... */ }
type ParamsEnviar = Parameters<typeof enviarNotificacion>; // [string, boolean]
const llamada: ParamsEnviar = ["Prado", true];

// ConstructorParameters<T>
// Parámetros del constructor como tupla
class Persona {
  constructor(public nombre: string, public edad: number) {}
}
type PersonaArgs = ConstructorParameters<typeof Persona>; // [string, number]
const argsPersona: PersonaArgs = ["Pipe", 28];
const persona = new Persona(...argsPersona);

// ReturnType<T>
// Tipo de retorno de una función
function calcularTotal(items: number[]): number {
  return items.reduce((a, b) => a + b, 0);
}
type Total = ReturnType<typeof calcularTotal>; // number

// InstanceType<T>
// Tipo de la instancia creada por un constructor
class Tienda {
  nombre = "Tiendita de la esquina";
}
type TiendaInstancia = InstanceType<typeof Tienda>; // Tienda
const t: TiendaInstancia = new Tienda();

// NoInfer<T>
// Bloquea inferencia para ese parámetro (útil en validaciones genéricas)
type NoInfer<T> = T & { __noinfer?: never }; // (shim simple para idea)
function crearSemaforo<C extends string>(
  colores: C[],
  colorDefault?: NoInfer<C>,
) {
  // solo permitir defaults que existan en 'colores'
  if (colorDefault && !colores.includes(colorDefault)) {
    throw new Error("Color inválido");
  }
  return { colores, colorDefault };
}
crearSemaforo(["rojo", "amarillo", "verde"], "rojo");   // OK
// crearSemaforo(["rojo", "amarillo", "verde"], "azul"); //

// ThisParameterType<T>
// Extrae el tipo de 'this' de una función
function toHex(this: Number) {
  return this.toString(16);
}
type ThisDeToHex = ThisParameterType<typeof toHex>; // Number
function numberToString(n: ThisDeToHex) {
  return toHex.apply(n);
}
console.log("5 en hex:", numberToString(5 as unknown as Number));

// OmitThisParameter<T>
// Crea una versión sin 'this' explícito
const cincoAHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
console.log("bind 5 ->", cincoAHex());

// ThisType<T>
// Marca contextual para 'this' (activar "noImplicitThis" en tsconfig)
type ObjDesc<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>;
};
function makeObject<D, M>(desc: ObjDesc<D, M>): D & M {
  const data = desc.data ?? ({} as D);
  const methods = desc.methods ?? ({} as M);
  return { ...data, ...methods };
}
const obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  },
});
obj.moveBy(3, 4);
console.log("pos:", obj.x, obj.y);

// Intrinsic String Manipulation
// Uppercase, Lowercase, Capitalize, Uncapitalize
type Marca = "ingeniot sas";
type MarcaUpper = Uppercase<Marca>;     // "INGENIOT SAS"
type MarcaCap = Capitalize<Marca>;      // "Ingeniot sas"
type MarcaLower = Lowercase<MarcaUpper>; // "ingeniot sas"

const etiqueta: Record<MarcaUpper, number> = { "INGENIOT SAS": 1 };
console.log("etiqueta:", etiqueta["INGENIOT SAS"]);

// Mini demo combinada (con Record + Partial + Pick + Omit)
type ID = string;

interface Producto {
  id: ID;
  nombre: string;
  precio: number;
  stock: number;
  descripcion?: string;
}

// "DB" simple por id
const dbProductos: Record<ID, Readonly<Producto>> = {
  "p1": { id: "p1", nombre: "Buñuelo", precio: 2000, stock: 50, descripcion: "Calentico" },
  "p2": { id: "p2", nombre: "Arepa", precio: 2500, stock: 40 },
};

// Actualizar con Partial (crea nuevo, no muta Readonly)
function actualizarProducto(id: ID, cambios: Partial<Producto>) {
  const actual = dbProductos[id];
  if (!actual) throw new Error("No existe");
  const nuevo: Producto = { ...actual, ...cambios };
  console.log("actualizado:", nuevo.nombre, nuevo.precio);
  return nuevo;
}
actualizarProducto("p1", { precio: 2200 });

// Vista pública con Pick
type ProductoPublico = Pick<Producto, "id" | "nombre" | "precio">;
const publico: ProductoPublico = { id: "p2", nombre: "Arepa", precio: 2500 };

// Info interna con Omit
type ProductoInterno = Omit<Producto, "descripcion">;
const interno: ProductoInterno = { id: "p1", nombre: "Buñuelo", precio: 2000, stock: 50 };

// NonNullable para asegurar valores
function precioSeguro(p?: number | null): NonNullable<number> {
  if (p == null) return 0;
  return p;
}
console.log("precio seguro:", precioSeguro(null));
