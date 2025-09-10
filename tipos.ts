
// Partial convierte todas las propiedades de un tipo en opcionales
type Spell = { name: string; manaCost: number; element: string };
type SpellUpdate = Partial<Spell>;


// Required convierte todas las propiedades de un tipo en obligatorias
type Quest = { title?: string; reward?: string };
type FullQuest = Required<Quest>;


// Readonly crea un tipo donde todas las propiedades son de solo lectura
type ArtConfig = { canvasSize: string; palette: string[] };
type FrozenArtConfig = Readonly<ArtConfig>;


// Pick selecciona un subconjunto de propiedades de un tipo
type Hero = { id: string; name: string; level: number; weapon: string };
type HeroCard = Pick<Hero, "id" | "name">;


// Omit crea un tipo excluyendo ciertas propiedades
type Villain = { id: string; name: string; secretPlan: string };
type PublicVillain = Omit<Villain, "secretPlan">;


// Record construye un tipo a partir de un conjunto de claves y un tipo de valor
type GuildRoles = "tank" | "healer" | "dps";
type RoleEquipment = Record<GuildRoles, string[]>;


// Exclude elimina de un tipo las opciones que coincidan con otro
type AnimeGenre = "shonen" | "shojo" | "isekai" | "horror";
type SafeGenre = Exclude<AnimeGenre, "horror">;


// Extract selecciona de un tipo solo las opciones que coincidan con otro
type MangaTypes = "seinen" | "josei" | "kodomo";
type AdultManga = Extract<MangaTypes, "seinen" | "josei">;


// NonNullable elimina null y undefined de un tipo
type MagicItem = string | null | undefined;
type SafeItem = NonNullable<MagicItem>;


// ReturnType obtiene el tipo de retorno de una función
function summonMonster(name: string, level: number) {
    return { name, level, type: "Beast" };
}
type Monster = ReturnType<typeof summonMonster>;


// Mapped Types: construir tipos dinámicamente
type Character = { name: string; class: string; level: number };

// Todas opcionales
type OptionalCharacter = { [K in keyof Character]?: Character[K] };

// Todas solo lectura
type FrozenCharacter = { [K in keyof Character]: Readonly<Character[K]> };
