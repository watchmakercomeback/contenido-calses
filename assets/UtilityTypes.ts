//Utility Types

//Partial convierte todas las propiedades de un tipo en opcionales
type Notebook = { title: string, content: string }
type NotebookNotes = Partial<Notebook>

//Required convierte todas las propiedades de un tipo en obligatorias
type Code = { imports?: string[], exports?: string[] }
type FullCode = Required<Code>;

//Readonly permite crear un tipo con todas las propiedades de otro tipo como solo lectura
type ShoppingMall = { name: string, location: string, stores: number }
const mall: Readonly<ShoppingMall> = { name: "Central Mall", location: "Downtown", stores: 150 }

//Pick seleccionar un subconjunto de propiedades de un tipo.
type PersonType = { id: number; name: string; email: string };
type UserPreview = Pick<PersonType, "id" | "name">;

type CellphoneType = { brand: string; model: string; price: number; color: string };
type CellphonePreview = Pick<CellphoneType, "brand" | "model">;


//Omit crear un tipo excluyendo ciertas propiedades de otro tipo.
type Plant = { species: string; color: string; age: number; height: number };
type PlantDetails = Omit<Plant, "color">

//Record construir un tipo a partir de un conjunto de claves y un tipo de valor. Claves K y valores T
type Continents = "America" | "Africa" | "Oceania" | "Asia" | "Europe";
type CountriesPerContinent = Record<Continents, string[]>;

// Exlude constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
type Food = "apple" | "banana" | "carrot" | "broccoli";
type Fruits = Exclude<Food, "carrot">;

// Extract constructs a type by extracting from Type all union members that are assignable to Union.
type Letter = "subject" | "body" | "signature";
type EmailContent = Extract<Letter, "subject" | "body">;

// NonNullable constructs a type by excluding null and undefined from Type.
type SearcbForVerification = string | null | undefined;
type StringVerification = NonNullable<SearcbForVerification>;

// ReturnType constructs a type consisting of the return type of function Type.
function add(a: number, b: number): number {
  return a + b;
}
type AddReturnType = ReturnType<typeof add>;
