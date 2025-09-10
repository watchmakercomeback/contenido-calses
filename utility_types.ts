// 1. Tipo de utilidad "Partial". / Utility type "Partial".

type partial<T> = {
    [K in keyof T]?: T[K];
}

// Ejemplo / Example:

type User1 = {
    id: number;
    name: string;
}

// Hace que todos los caracteres del objeto se vuelvan opcionales. / Makes all characters in the object optional.
type PartialUser = partial<User1>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 2. Tipo de utilidad "Required". / Utility type "Required".

type required<T> = {
    [K in keyof T]-?: T[K];
}

// Ejemplo / Example:

type User2 = {
    id?: number;
    name?: string;
}

// Hace que todos los caracteres del objeto se vuelvan obligatorios. / Makes all characters in the object mandatory.
type RequiredUser = required<User2>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 3. Tipo de utilidad "Readonly". / Utility type "Readonly".

type readOnly<T> = {
    readonly [K in keyof T ]: T[K];
}

// Ejemplo / Example:

type User3 = {
    id: number;
    name: string;
}

// Hace que ningún valor se pueda reasignar. / Prevents any value from being reassigned.
type UserReadOnly = readOnly<User3>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 4. Tipo de utilidad "Pick". / Utility type "Pick".

type choose<T, K extends keyof T> ={
    [P in K]: T[P];
}

// Ejemplo / Example:

type User4 = {
    id: number;
    name: string;
    status: boolean;
}

// Delvuelve un objeto solo con las propiedades "id" y "name". / Returns an object with only the “id” and “name” properties.
type BasicUser = choose<User4, "id" | "name">;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 5. Tipo de utilidad "Omit". / Utility type "Omit".

type omit<T, K extends keyof any> = {
    [P in exclude<keyof T, K>]: T[P];
}

// Ejemplo / Example:

type User5 = {
    id: number;
    name: string;
    status: boolean
};

// Muestra las propiedades del objeto exepto "status". / Displays the properties of the object except for “status”.
type UserWithoutStatus = omit<User5, "status">

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 6. Tipo de utilidad "Record". / Utility type "Record".

type record<K extends keyof any, T> = {
    [P in K]: T;
}

// Ejemplo / Example:

// Las propiedades tomaran un valor booleano. (admin: boolean; user: boolean). / The properties will take a Boolean value. (admin: Boolean; user: Boolean).
type Roles = record<"admin" | "user", boolean>;


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 7. Tipo de utilidad "Exlude". / Utility type "Exlude".

type exclude<T , U> = T extends U ? never : T;

// Ejemplo / Example:

type lyrics = 'a' | 'b' | 'b' | 'c';

// Excluye las propiedades que sean diferentes a "b". / Exclude properties that are different from “b”.
type OnlyA = exclude<lyrics, 'a' | 'c'>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 8. Tipo de utilidad "Extract". / Utility type "Extract".

type extract<T, U> = T extends U ? T : never;

// Ejemplo / Example:

type lyrics2 = 'a' | 'b' | 'c';

// 
type Coincidences = extract<lyrics2, "b" | "d">;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 9. Tipo de utilidad "NonNullable". / Utility type "NonNullable".

type notNull<T> = T extends null | undefined ? never : T;

// Ejemplo / Example:

// 
type Validation = notNull<string | null | undefined>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 10. Tipo de utilidad "ReturnType". / Utility type "ReturnType".

type returnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

// Ejemplo / Example:

function sum(n1: number, n2: number) {
    return n1 + n2;
}

// Devuelve el tipo de dato de las propiedades (n1: number y n2: number). / Returns the data type of the properties (n1: number and n2: number).
type ReturnSumType = returnType<typeof sum>;
