// Interface for a named resource with a URL
export interface NamedAPIResource {
  name: string;
  url: string;
}

// Pokemon Ability interface
export interface PokemonAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

// Game index interface for a version
export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

// Held item interface
export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: {
    rarity: number;
    version: NamedAPIResource;
  }[];
}

// Pokemon Move interface
export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: {
    level_learned_at: number;
    version_group: NamedAPIResource;
    move_learn_method: NamedAPIResource;
  }[];
}

// Past types interface
export interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType[];
}

// Pokemon Sprites interface
export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default: string;
  back_shiny: string;
  back_female?: string;
  back_shiny_female?: string;
}

// Pokemon Cries interface
export interface PokemonCries {
  cry_url: string;
}

// Pokemon Stat interface
export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

// Pokemon Type interface
export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

// Main Pokemon interface
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}
