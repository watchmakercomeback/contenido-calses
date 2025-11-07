
//creamos los tipos
type UserType = {
  id: number;
  name: string;
  email: string;
};

type Configrequired = { 
    debug?: boolean; 
    verbose?: boolean; 
};

type SettingsRandoly = { readonly theme: string;
    language: string 
};

type PickType = {
     id: number; 
     name: string ; 
     email: string 
    };

type UserPrivate = Omit<UserType, "email">;  

type myRoles = "admin" | "user" | "guest";
type MyExcluded = Exclude<myRoles, "guest">;
type MyExtracted = Extract<myRoles, "admin" | "guest">;

type myNullable = string | number | null | undefined;
type myNonNullableType = NonNullable<myNullable>;
type myReturnType = () => string;





// type partial<T> convierte todas las propiedades de un tipo en opcionales

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

//"Para cada propiedad P en las claves de T, hazla opcional con ?, y conserva su tipo original T[P]".

// type required<T>
type Myrequired<T> = { 
  [P in keyof T]-?: T[P];  //[P in keyof T]: recorre cada propiedad del tipo.
};
//[P in keyof T]: recorre cada propiedad del tipo.
//-?: quita el modificador opcional ? de la propiedad.
//T[P]: mantiene el tipo original del valor.


// type readonly<T>,  convierte y hace que todas las propiedades de un tipo en solo lectura, no se puede modificar despues de haber sido asignadas
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
//readonly: hace que la propiedad sea de solo lectura, es decir, no se puede modificar después de su inicialización.
//[P in keyof T]: recorre cada propiedad del tipo T.
//T[P]: mantiene el tipo original del valor.

// type pick<T,K>
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
//K extends keyof T: asegura que K sea un subconjunto de las claves de T.
//[P in K]: recorre cada clave en el conjunto K.
//T[P]: mantiene el tipo original del valor para las claves seleccionadas.

// type omit<T,K>
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
//Exclude<keyof T, K>: obtiene las claves de T que no están en K.
//[P in Exclude<keyof T, K>]: recorre cada clave que no está en K.
//T[P]: mantiene el tipo original del valor para las claves restantes.  


// type record<K,T>
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};
//K extends keyof any: asegura que K sea un tipo que pueda ser usado como clave de un objeto (string, number, symbol).
//[P in K]: recorre cada clave en el conjunto K.
//T: asigna el tipo T a cada clave P.

//Type exclude
type MyExclude<T, U> = T extends U ? never : T;
//T extends U: verifica si T es asignable a U.
//? never : T: si T es asignable a U, devuelve never (excluye T); de lo contrario, devuelve T.

//Type extract
type MyExtract<T, U> = T extends U ? T : never;
//T extends U: verifica si T es asignable a U.
//? T : never: si T es asignable a U, devuelve T; de lo contrario, devuelve never (excluye T).

//Type nonnullable
type MyNonNullable<T> = T & {};
//T & {}: intersecta T con un objeto vacío {}, eliminando null y undefined de T.

//type returntype
type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
//T extends (...args: any[]) => any: asegura que T sea una función.
//T extends (...args: any[]) => infer R: usa infer para capturar el tipo de retorno de la función en R.
//? R : any: si T es una función, devuelve el tipo capturado R; de lo contrario, devuelve any.