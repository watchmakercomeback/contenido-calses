// Parcial = Partial<T>
type Parcial<T> = {
  [K in keyof T]?: T[K];
};
// Ejemplo:
type UserType = { id: number, name: string, email: string };
type UserDraft = Parcial<UserType>;
// Resulta en: { id?: number; name?: string; email?: string }


// 2. Obligatorio = Required<T>
type Obligatorio<T> = {
  [K in keyof T]-?: T[K];
};
// Ejemplo:
type Config = { debug?: boolean, verbose?: boolean };
type StrictConfig = Obligatorio<Config>;
// Resulta en: { debug: boolean; verbose: boolean }


// 3. SoloLectura = Readonly<T>
type SoloLectura<T> = {
  readonly [K in keyof T]: T[K];
};
// Ejemplo:
type Settings = { theme: string, language: string };
const appSettings: SoloLectura<Settings> = { theme: "dark", language: "es" };
// appSettings.theme = "light"; // ❌ Error


// 4. Elegir = Pick<T, K>
type Elegir<T, K extends keyof T> = {
  [P in K]: T[P];
};
// Ejemplo:
type PersonType = { id: number; name: string; email: string };
type UserPreview = Elegir<PersonType, "id" | "name">;
// Resulta en: { id: number; name: string }


// 5. Omitir = Omit<T, K>
type Omitir<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
// Ejemplo:
type UserPrivate = Omitir<UserType, "email">;
// Resulta en: { id: number; name: string }


// 6. Registro = Record<K, T>
type Registro<K extends keyof any, T> = {
  [P in K]: T;
};
// Ejemplo:
type Roles = "admin" | "user" | "guest";
type RolePermissions = Registro<Roles, string[]>;
// Resulta en: { admin: string[]; user: string[]; guest: string[] }


// 7. Excluir = Exclude<T, U>
type Excluir<T, U> = T extends U ? never : T;
// Ejemplo:
type Example1 = Excluir<"a" | "b" | "c", "a" | "c">;
// Resulta en: "b"


// 8. Extraer = Extract<T, U>
type Extraer<T, U> = T extends U ? T : never;
// Ejemplo:
type Example2 = Extraer<"a" | "b" | "c", "a" | "d">;
// Resulta en: "a"


// 9. NoNulo = NonNullable<T>
type NoNulo<T> = T extends null | undefined ? never : T;
// Ejemplo:
type Example3 = NoNulo<string | number | undefined | null>;
// Resulta en: string | number


// 10. TipoRetorno = ReturnType<F>
type TipoRetorno<F extends (...args: any[]) => any> =
  F extends (...args: any[]) => infer R ? R : never;
// Ejemplo:
function getUser() {
  return { id: 1, name: "Alice" };
}
type UserReturn = TipoRetorno<typeof getUser>;
// Resulta en: { id: number; name: string }