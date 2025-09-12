//Utility Types


//Partial convierte todas las propiedades de un tipo en opcionales
//type UserType = { id: number, name: string, email: string }
//type UserDraft = Partial<UserType>
type MyPartial<T> = { [K in keyof T]?: T[K] }



//Required convierte todas las propiedades de un tipo en obligatorias
//type Config = { debug?: boolean, verbose?: boolean }
//type StrictConfig = Required<Config>;
type Myrequire<T> = { [K in keyof T]-?: T[K] }

//Readonly permite crear un tipo con todas las propiedades de otro tipo como solo lectura
//type Settings = { readonly theme: string, language: string }
//const appSettings: Readonly<Settings> = { theme: "dark", language: "es" } // appSettings.theme = "light"; ❌ Error

type MyRedondly<T> =  { readonly [K in keyof T]: T[K] }

//Pick seleccionar un subconjunto de propiedades de un tipo.
//type PersonType = { id: number; name: string; email: string };
//type UserPreview = Pick<PersonType, "id" | "name">;

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }


//Omit crear un tipo excluyendo ciertas propiedades de otro tipo.
//type UserPrivate = Omit<User, "email">;

type MyOmit<T, K extends keyof any> = { [P in Exclude<keyof T, K>]: T[P] }

//Record construir un tipo a partir de un conjunto de claves y un tipo de valor. Claves K y valores T
//type Roles = "admin" | "user" | "guest";
//type RolePermissions = Record<Roles, string[]>; // { admin: string[]; user: string[]; guest: string[] }

type MyRecord<K extends keyof any, T> = { [P in K]: T }

//Exlude
//Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
 type MyExclude<T, U> = T extends U ? never : T

// Extract
//Constructs a type by extracting from Type all union members that are assignable to Union.
type MyExtract<T, U> = T extends U ? T : never

// NonNullable
//Constructs a type by excluding null and undefined from Type.
type MyNonNullable<T> = T extends null | undefined ? never : T


// ReturnType
//Constructs a type consisting of the return type of function Type.
type MyReturnType<T extends (...args: any[]) => any> =
    T extends (...args: any[]) => infer R ? R : never
