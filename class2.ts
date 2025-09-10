//Utility Types


//Partial: convierte todas las propiedades de un tipo en opcionales
type UserType = { id: number, name: string, email: string }

type UserDraft = Partial<UserType>

// --- MyPartial
type MyPartial<T> = {
    [P in keyof T]?: T[P];
}

interface Todo {
    title: string;
    description: string;
}

const todo: MyPartial<Todo> = {
    title: "Hey"
}

//Required: convierte todas las propiedades de un tipo en obligatorias
type Config = { debug?: boolean, verbose?: boolean }

type StrictConfig = Required<Config>;

// --- MyRequired
type MyRequired<T> = {
    [P in keyof T]-?: T[P];
}

const todo2: MyRequired<Todo> = {
    title: "Hey",
    description: "foobar"
}

//Readonly: permite crear un tipo con todas las propiedades de otro tipo como solo lectura
type Settings = { readonly theme: string, language: string }

const appSettings: Readonly<Settings> = { theme: "dark", language: "es" } // appSettings.theme = "light"; ❌ Error

// --- MyReadonly
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}

const todo3: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

//Pick: seleccionar un subconjunto de propiedades de un tipo.
type PersonType = { id: number; name: string; email: string };

type UserPreview = Pick<PersonType, "id" | "name">;

// --- MyPick
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

const todo4: MyPick<Todo, 'title'> = {
    title: "Hey"
}

//Omit: crear un tipo excluyendo ciertas propiedades de otro tipo.
type UserPrivate = Omit<UserType, "email">;

// --- MyOmit
type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
}

const todo5: MyOmit<Todo, 'description'> = {
    title: "Hey"
}

//Record: construir un tipo a partir de un conjunto de claves y un tipo de valor. Claves K y valores T
type Roles = "admin" | "user" | "guest";

type RolePermissions = Record<Roles, string[]>; // { admin: string[]; user: string[]; guest: string[] }

// --- MyRecord
type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
}

const nameAgeMap: MyRecord<string, number> = {
    'Alice': 21,
    'Bob': 25,
    'Eve': 22
};

//Exlude: construir un tipo excluyendo de un conjunto de tipos aquellos que son asignables a otro conjunto de tipos.
type T1_Exclude = Exclude<"a" | "b" | "c", "a" | "f">; // "b" | "c"
type T2_Exclude = Exclude<string | number | (() => void), Function>; // string | number
type T3_Exclude = Exclude<string, string | number>; // never
type T4_Exclude = Exclude<never, string>; // never

// --- MyExclude
type MyExclude<T, U> = T extends U ? never : T;

type T5_Exclude = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"
type T6_Exclude = MyExclude<"a" | "b" | "c", "a" | "b">; // "c"
type T7_Exclude = MyExclude<string | number | (() => void), Function>; // string | number
type T8_Exclude = MyExclude<string, string | number>; // never

// Extract: construir un tipo extrayendo de un conjunto de tipos aquellos que son asignables a otro conjunto de tipos.
type T1_Extract = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T2_Extract = Extract<string | number | (() => void), Function>; // () => void
type T3_Extract = Extract<string, string | number>; // string
type T4_Extract = Extract<never, string>; // never

// --- MyExtract
type MyExtract<T, U> = T extends U ? T : never;

type T5_Extract = MyExtract<"a" | "b" | "c", "a" | "f">; // "a"
type T6_Extract = MyExtract<string | number | (() => void), Function>; // () => void
type T7_Extract = MyExtract<string, string | number>; // string
type T8_Extract = MyExtract<never, string>; // never

// NonNullable: construir un tipo excluyendo null y undefined de un tipo dado.
type T1_NonNullable = NonNullable<string | number | null | undefined>; // string | number
type T2_NonNullable = NonNullable<string[] | null | undefined>; // string[]
type T3_NonNullable = NonNullable<null | undefined>; // never
type T4_NonNullable = NonNullable<string | undefined>; // string

// --- MyNonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T;

type T5_NonNullable = MyNonNullable<string | number | undefined>; // string | number
type T6_NonNullable = MyNonNullable<string[] | null | undefined>; // string[]
type T7__NonNullable = MyNonNullable<null | undefined>; // never
type T8_NonNullable = MyNonNullable<string | undefined>; // string

// ReturnType: construir un tipo que representa el tipo de retorno de una función.
type T1_ReturnType = ReturnType<() => string>; // string
type T2_ReturnType = ReturnType<(s: string) => void>; // void
type T3_ReturnType = ReturnType<<T>() => T>; // {}
type T4_ReturnType = ReturnType<<T extends U, U extends number[]>() => T>; // number[]

// --- MyReturnType
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function f1(s: string): number {
    return s.length;
}

type T5_ReturnType = MyReturnType<typeof f1>; // number
type T6_ReturnType = MyReturnType<() => string>; // string
type T7_ReturnType = MyReturnType<(s: string) => void>; // void
type T8_ReturnType = MyReturnType<<T>() => T>; // {}
