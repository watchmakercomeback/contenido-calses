//Utility types
/* Partial<Type>
Constructs a type with all properties of a Type and it sets to optional. This utility will return a type that represents all subsets of a given type.*/
type Parcial<T> = {
  [K in keyof T]?: T[K];
};
type UserType = { id: number, name: string, email: string };
type UserDraft = Parcial<UserType>;
// { id?: number; name?: string; email?: string }

/* Required<Type>
Constructs a type with all the properties of a Type and it sets to required. the opposite of Partial */
type Obligatorio<T> = {
[K in keyof T]-?: T[K];
};
type config = { debug?: boolean, verbose?: boolean };
type StrictConfig = Obligatorio<config>;
// { debug: boolean; verbose: boolean }

/* Readonly<Type>
Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.*/
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
type Settings = { theme: string; language: string };
const appSettings: MyReadonly<Settings> = { theme: "dark", language: "es" };
// appSettings.theme = "light"; Error

/* Pick<Type, Keys>
Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.*/
type Seleccionar<T, K extends keyof T> = {
[P in K]: T[P];
};
type PersonType = { id: number; name: string; email: string };
type UserPreview = Seleccionar<PersonType, "id" | "name">;
// { id: number; name: string }

/* Omit<Type, Keys>
Constructs a type by picking all properties from Type and then removing Keys. The opposite of Pick.*/
type omitir <T, K extends keyof T> = {
[P in Exclude<keyof T, K>]:T[P];
};
type Roles = "admin" | "user" | "guest";
// { admin: string[]; user: string[]; guest: string[] }

/*Exclude<UnionType, ExcludedMembers>
Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.*/
type Excluir<T, U> = T extends U ? never : T;
type TestExclude = Excluir<"a" | "b" | "c", "a" | "c">;
// "b"

/*Extract<Type, Union>
Constructs a type by extracting from Type all union members that are assignable to Union.*/
type Extraer<T, U> = T extends U ? T : never;
type TestExtract = Extraer<"a" | "b" | "c", "a" | "c">;
// "a" | "c"

/*NonNullable<Type>
Constructs a type by excluding null and undefined from Type.*/
type NoNulo<T> = T extends null | undefined ? never : T;
type TestNonNullable = NoNulo<string | null | undefined>;
// string

/*ReturnType<Type>
Constructs a type consisting of the return type of function Type.*/
type TipoRetorno<T extends (...args: any[]) => any> =
T extends (...args: any[]) => infer R ? R : never;
function getUser() {
return { id: 1, name: "Juan" };
}                                    
type UserReturn = TipoRetorno<typeof getUser>;
// { id: number; name: string }