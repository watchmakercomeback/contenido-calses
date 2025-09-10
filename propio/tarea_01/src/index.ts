


// Helpers async para preguntar en consola
function ask(q: string): Promise<string> {
  return new Promise((res) => rl.question(q, (ans: string) => res(ans.trim())));
}
async function askInt(q: string): Promise<number> {
  const v = await ask(q);
  const n = Number(v);
  if (!Number.isInteger(n)) {
    console.log("❌ Debes ingresar un número entero.\n");
    return askInt(q);
  }
  return n;
}

// ====== Registro de mascotas (interactivo) ======
interface MascotaRegistro {
  nombre: string;
  raza: string;
  edad: number;
}
const registro: MascotaRegistro[] = [];

async function registrarMascota() {
  console.log("\n=== Registrar Mascota ===");
  const nombre = await ask("Nombre: ");
  const raza = await ask("Raza: ");
  const edad = await askInt("Edad (entero): ");
  registro.push({ nombre, raza, edad });
  console.log("✅ Registrada:", { nombre, raza, edad });
}

function listarMascotas() {
  console.log("\n=== Lista de Mascotas ===");
  if (registro.length === 0) {
    console.log("No hay mascotas registradas aún.");
    return;
  }
  registro.forEach((m, i) =>
    console.log(`${i + 1}. ${m.nombre} - ${m.raza} - ${m.edad} años`)
  );
}

// ====== 1) Partial ======
function demoPartial() {
  console.log("\n=== Partial ===");
  interface Mascota {
    nombre: string;
    edad: number;
    raza: string;
  }
  function mergeMascota(base: Mascota, fieldsToUpdate: Partial<Mascota>): Mascota {
    return { ...base, ...fieldsToUpdate };
  }
  const base: Mascota = { nombre: "chuck", edad: 3, raza: "criollo" };
  const actualizada1 = mergeMascota(base, { edad: 4 });
  const actualizada2 = mergeMascota(base, { nombre: "perssha", raza: "dálmata" });

  console.log("Base:", base);
  console.log("Actualizada (solo edad):", actualizada1);
  console.log("Actualizada (nombre y raza):", actualizada2);
}

// ====== 2) Readonly ======
function demoReadonly() {
  console.log("\n=== Readonly ===");
  interface Mascota {
    nombre: string;
  }
  const m: Readonly<Mascota> = { nombre: "chuck" };
  console.log(
    "Readonly evita reasignar propiedades (m.nombre = ... da error en compilación) =>",
    m
  );
}

// ====== 3) Pick ======
function demoPick() {
  console.log("\n=== Pick ===");
  interface Mascota {
    nombre: string;
    edad: number;
    raza: string;
  }
  type MascotaSinEdad = Pick<Mascota, "nombre" | "raza">;
  const mascota: MascotaSinEdad = { nombre: "chuck", raza: "dálmata" };
  console.log("Mascota (sin edad):", mascota);
}

// ====== 4) Omit ======
function demoOmit() {
  console.log("\n=== Omit ===");
  interface Mascota {
    nombre: string;
    edad: number;
    raza: string;
  }
  type MascotaSinRaza = Omit<Mascota, "raza">;
  const m1: MascotaSinRaza = { nombre: "chuck", edad: 2 };
  console.log("Mascota sin raza:", m1);

  type MascotaInfo = Omit<Mascota, "edad">;
  const info: MascotaInfo = { nombre: "chuck", raza: "dálmata" };
  console.log("Mascota info (sin edad):", info);
}

// ====== 5) Record ======
function demoRecord() {
  console.log("\n=== Record ===");
  type Razas = "Salchicha" | "Rottweiler" | "Golden Retriever" | "Criollo";
  interface Mascota {
    nombre: string;
    edad: number;
  }
  const mascotas: Record<Razas, Mascota> = {
    Salchicha: { nombre: "chuck", edad: 10 },
    Rottweiler: { nombre: "perssha", edad: 1 },
    "Golden Retriever": { nombre: "lila", edad: 2 },
    Criollo: { nombre: "pepe", edad: 3 },
  };
  console.log("Salchicha:", mascotas.Salchicha);
  console.log("Golden Retriever:", mascotas["Golden Retriever"]);
  console.log("Criollo:", mascotas.Criollo);
}

// ====== 6) Exclude ======
function demoExclude() {
  console.log("\n=== Exclude ===");
  type T0 = Exclude<"labrador" | "beagle" | "poodle", "labrador">;
  type T1 = Exclude<"labrador" | "beagle" | "poodle", "labrador" | "beagle">;
  type T2 = Exclude<string | number | (() => void), Function>;
  type Dog =
    | { kind: "labrador"; friendly: boolean }
    | { kind: "beagle"; howlPitch: number }
    | { kind: "poodle"; groomingLevel: 1 | 2 | 3 };
  type T3 = Exclude<Dog, { kind: "labrador" }>;
  console.log("T0, T1, T2, T3 demostrados (tipos durante compilación).");
}

// ====== 7) Extract ======
function demoExtract() {
  console.log("\n=== Extract ===");
  type T0 = Extract<"labrador" | "beagle" | "poodle", "beagle" | "husky">;
  type T1 = Extract<string | number | (() => void), Function>;
  type Mascota =
    | { kind: "labrador"; friendly: boolean }
    | { kind: "beagle"; howlPitch: number }
    | { kind: "poodle"; groomingLevel: 1 | 2 | 3 };
  type T2 = Extract<Mascota, { kind: "labrador" }>;
  console.log("T0, T1, T2 demostrados (tipos durante compilación).");
}

// ====== 8) NonNullable ======
function demoNonNullable() {
  console.log("\n=== NonNullable ===");
  type Perro = NonNullable<string | number | undefined>;
  type Gato = NonNullable<string[] | null | undefined>;
  console.log("Perro y Gato demuestran NonNullable en tipos.");
}

// ====== 9) ReturnType ======
function demoReturnType() {
  console.log("\n=== ReturnType ===");
  function getDogName() {
    return "Firulais";
  }
  type DogName = ReturnType<typeof getDogName>;
  const nombre: DogName = getDogName();
  console.log("Tipo inferido de retorno:", nombre);
}

// ====== Menú interactivo ======
async function menu(): Promise<number> {
  console.log("\n🐾 MENÚ DE OPCIONES 🐾");
  console.log("0. Registrar mascota");
  console.log("1. Partial");
  console.log("2. Readonly");
  console.log("3. Pick");
  console.log("4. Omit");
  console.log("5. Record");
  console.log("6. Exclude");
  console.log("7. Extract");
  console.log("8. NonNullable");
  console.log("9. ReturnType");
  console.log("10. Listar mascotas registradas");
  console.log("11. Salir");
  return askInt("Selecciona una opción: ");
}

// ====== Loop principal ======
async function main() {
  let salir = false;
  while (!salir) {
    const opcion = await menu();
    switch (opcion) {
      case 0: await registrarMascota(); break;
      case 1: demoPartial(); break;
      case 2: demoReadonly(); break;
      case 3: demoPick(); break;
      case 4: demoOmit(); break;
      case 5: demoRecord(); break;
      case 6: demoExclude(); break;
      case 7: demoExtract(); break;
      case 8: demoNonNullable(); break;
      case 9: demoReturnType(); break;
      case 10: listarMascotas(); break;
      case 11: salir = true; console.log("👋 Saliendo..."); break;
      default: console.log("⚠️ Opción inválida, intenta otra vez.");
    }
  }
  close();
}

main();
