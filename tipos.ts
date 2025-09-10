// Partial<T>
// Convierte todas las propiedades en opcionales
type MyPartial<T> = {
    [K in keyof T]?: T[K];
};


// Required<T>
// Convierte todas las propiedades en obligatorias
type MyRequired<T> = {
    [K in keyof T]-?: T[K];
};


// Readonly<T>
// Convierte todas las propiedades en solo lectura
type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};


// Pick<T, K>
// Selecciona un subconjunto de propiedades
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};


// Omit<T, K>
// Excluye ciertas propiedades de un tipo
type MyOmit<T, K extends keyof any> = MyPick<T, Exclude<keyof T, K>>;


// Record<K, T>
// Construye un tipo con claves K y valores T
type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
};


// Exclude<T, U>
// Excluye de T los tipos que están en U
type MyExclude<T, U> = T extends U ? never : T;


// Extract<T, U>
// Selecciona de T solo los tipos que están en U
type MyExtract<T, U> = T extends U ? T : never;


// NonNullable<T>
// Excluye null y undefined de un tipo
type MyNonNullable<T> = T extends null | undefined ? never : T;


// ReturnType<T>
// Obtiene el tipo de retorno de una función
type MyReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => infer R ? R : never;


// ========================
// Ejemplos de uso
// ========================
type Hero = { id: string; name: string; level?: number };

// Partial
type HeroUpdate = MyPartial<Hero>;
// { id?: string; name?: string; level?: number }

// Required
type StrictHero = MyRequired<Hero>;
// { id: string; name: string; level: number }

// Readonly
type FrozenHero = MyReadonly<Hero>;
// { readonly id: string; readonly name: string; readonly level?: number }

// Pick
type HeroCard = MyPick<Hero, "id" | "name">;
// { id: string; name: string }

// Omit
type PublicHero = MyOmit<Hero, "level">;
// { id: string; name: string }

// Record
type Roles = "tank" | "healer";
type RoleGear = MyRecord<Roles, string[]>;
// { tank: string[]; healer: string[] }

// Exclude
type SafeGenre = MyExclude<"shonen" | "horror", "horror">;
// "shonen"

// Extract
type AdultManga = MyExtract<"seinen" | "kodomo", "seinen">;
// "seinen"

// NonNullable
type Item = MyNonNullable<string | null | undefined>;
// string

// ReturnType
function summonMonster(name: string) { return { name, type: "Beast" }; }
type Monster = MyReturnType<typeof summonMonster>;
// { name: string; type: string }
