type Parcial<T> = {
  [K in keyof T]?: T[K];
};

type Requerido<T> = {
  [K in keyof T]-?: T[K];
};

type SoloLectura<T> = {
  readonly [K in keyof T]: T[K];
};

type Elegir<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Omitir<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type Registro<K extends keyof any, V> = {
  [P in K]: V;
};

type Excluir<T, U> = T extends U ? never : T;

type Extraer<T, U> = T extends U ? T : never;

type NoNulo<T> = T extends null | undefined ? never : T;

interface Usuario {
  id: number;
  nombre: string;
  email?: string;
}

type UsuarioParcial = Parcial<Usuario>;
type UsuarioRequerido = Requerido<Usuario>;
type UsuarioSoloLectura = SoloLectura<Usuario>;
type UsuarioElegido = Elegir<Usuario, "id" | "nombre">;
type UsuarioOmitido = Omitir<Usuario, "email">;
type MapaUsuarios = Registro<string, Usuario>;
type SoloNumeros = Excluir<string | number | boolean, string | boolean>;
type SoloStrings = Extraer<string | number, string>;
type UsuarioSinNull = NoNulo<string | null | undefined>;
