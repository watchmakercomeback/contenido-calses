function returnSomething(a:string, b?:string): string {
    return b ? a + b : a;
}


function returnSomethingAgain(a:string, b:string = "After"): string {
    return b ? a + b : a;
}





// Esto se llama Template Literal Types
type Race = "Human" | "Elf" | "Dwarf";
type Class = "Warrior" | "Mage" | "Rogue";  
type Hero = `Hero ${Race} ${Class}`;

let hero1: Hero = "Hero Human Warrior";
let hero2: Hero = "Hero Elf Mage";
let hero3: Hero = "Hero Dwarf Rogue";







type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const worker: Staff = { name: "Carlos", employeeId: 123 };






// Dato curioso los enums en TypeScript son "mixtos", pueden tener valores numéricos y de cadena
// Por defecto los enums son numéricos, empezando en 0 y aumentando de uno en uno
// Pero se puede asignar cualquier valor (numérico o cadena) a cada miembro del enum
// El codigo sí transpila a JavaScript
// Pero no es recomendable usar enums en TypeScript, es mejor usar union types o as const
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;

let directionName: string = Direction[move];



//Narrowing con tipos literales y union types
//Narrowing sirve para que el compilador de TypeScript pueda deducir el tipo exacto de una variable en tiempo de compilación
//y así poder ofrecer autocompletado y validación de tipos más precisa

type Shape = 
  | { kind: "circle"; radius?: number }
  | { kind: "square"; side: number };

function area(shape: Shape) {
  if (shape.kind === "circle" && shape.radius !== undefined) {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.side ** 2;
  }
}




//Genéricos
function identity<T>(arg: T): T {
    return arg;
}

//Esto funciona porque TypeScript infiere el tipo de T a partir del tipo del argumento que se le pasa a la función
type EsStringNoVacio<T> =
  T extends string ? "Carlos" : "Ana"

function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}










//Mapped Types
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type User = { id: number; name: string };
type UserOptional = Optional<User>; // { id?: number; name?: string }
