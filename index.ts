type OK = "VALIDO";
type KO = "INVALIDO";

//Tipo condicionales con lógica booleana
type Not<B> = B extends OK ? KO : OK; //Si B es OK => KO. Pero si B no es OK => OK

type And<A, B> = //Si A no es OK => KO. Si A sí es OK, entonces => B es OK?
    A extends OK ? (B extends OK ? OK : KO) : KO; //Sólo es OK cuando ambos son OK.

type Or<A, B> = //Si A es OK => OK. Si A no es OK => B es OK? si B es OK => OK. Si no, entonces KO
    A extends OK ? OK : (B extends OK ? OK : KO); //Sólo es OK cuando cualquiera o los dos, es OK.

//Incementa la longitud de una tupla o array de tipos
type Inc<T extends unknown[]> = [unknown, ...T]; //Ejm: Si T mide 3, Inc<T> mide 4.

//Construye, a nivel de tipos, una tupla de longitud N.
type Build<N, T extends unknown[] = []> =
    T['length'] extends N ? T : Build<N, Inc<T>>; //Si T['length'] ya es N, vuelve a T. Si no, llama a Inc<T>

//A mayor que B? => OK o KO.
type GT<A extends number, B extends number> =
    Build<B> extends [...Build<A>] ? KO : OK; //¿Build<B> puede verse como Build<A> + algo al final?

//Según el literal de regla R, evalúa el valor/tipo V y devuelve "VALIDO" (OK) o "INVALIDO" (KO) usando tipos condicionales.
type RuleBase<V, R> =
    R extends "string_no_vacio"
        ? (V extends "" ? KO : (V extends string ? OK : KO)) //Está vacío?
        : R extends "mayor_18"
            ? (V extends number ? GT<V, 18> : KO) //Es mayor a 18?
            : R extends "boolean_true"
                ? (V extends true ? OK : KO) //Es string?
                : never;


type Validate<V, R> =
//NOT/AND/OR se chequean antes de ir a reglas base.
//validación tipo NOT
    R extends { NOT: infer R1 }
        ? Not<Validate<V, R1>>
        //Validación tipo AND
        : R extends { AND: infer L }
            ? L extends readonly unknown[]
                ? AndFold<V, L>
                : never
            //Validación tipo OR
            : R extends { OR: infer L2 }
                ? L2 extends readonly unknown[]
                    ? OrFold<V, L2>
                    : never
                //Base
                : RuleBase<V, R>;

//Reducción de una lista de reglas usando conectores lógicos
type AndFold<V, L> =
    L extends readonly [infer H, ...infer T] //la tupla está vacía?
        ? And<Validate<V, H>, AndFold<V, T>>
        : OK; //Si no es vacía
//Pero si es vacía
type OrFold<V, L> =
    L extends readonly [infer H, ...infer T]
        ? Or<Validate<V, H>, OrFold<V, T>> //Se aplican identidades lógicas AND o OR
        : KO;

//Define el formato de una regla de esquema como tupla inmutable
type Entry = readonly [key: PropertyKey, rule: unknown];

type FieldValue<Obj, K> = //Dado un objeto Obj y una clave K, devuelve el tipo del campo Obj[K].
    K extends keyof Obj ? Obj[K] : never;

type ValidateEntries<Obj, Entries> = //Recorre la lista de entradas Entries
    Entries extends readonly [infer H, ...infer T]
        ? H extends Entry
            ? And<
                Validate<FieldValue<Obj, H[0]>, H[1]>,
                ValidateEntries<Obj, T>
            >
            : KO
        : OK;

//Valida un Obj contra un Esquema
type ValidarObjeto<Obj, Esquema extends readonly Entry[]> =
    ValidateEntries<Obj, Esquema>;

