// //Utility Types


// //Partial convierte todas las propiedades de un tipo en opcionales
// type UserType = { id: number, name: string, email: string }

// type UserDraft = Partial<UserType>



// //Required convierte todas las propiedades de un tipo en obligatorias
// type Config = { debug?: boolean, verbose?: boolean }

// type StrictConfig = Required<Config>;


// //Readonly permite crear un tipo con todas las propiedades de otro tipo como solo lectura
// type Settings = { readonly theme: string, language: string }

// const appSettings: Readonly<Settings> = { theme: "dark", language: "es" } // appSettings.theme = "light"; ❌ Error


// //Pick seleccionar un subconjunto de propiedades de un tipo.
// type PersonType = { id: number; name: string; email: string };

// type UserPreview = Pick<PersonType, "id" | "name">;


// //Omit crear un tipo excluyendo ciertas propiedades de otro tipo.
// type UserPrivate = Omit<User, "email">;



// //Record construir un tipo a partir de un conjunto de claves y un tipo de valor. Claves K y valores T
// type Roles = "admin" | "user" | "guest";

// type RolePermissions = Record<Roles, string[]>; // { admin: string[]; user: string[]; guest: string[] }



// //Exlude, Extract, NonNullable, ReturnType
