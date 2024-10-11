"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { NamedAPIResource, Pokemon } from "./models/models";
import PokemonCard from "./components/pokemon-card";

export default function Home() {
  // fetched data state
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon";
        // fetch first the list of pokemon
        const result = await axios.get(url);
        if (result) {
          // Fetch individual data of each pokemon and return a new array
          const pokemonData = await Promise.all(
            (result.data.results as NamedAPIResource[]).map(async (pokemon) => {
              let tempResult = await axios.get(pokemon.url);

              return tempResult.data as Pokemon;
            })
          );

          setData(pokemonData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);
  return (
    <main className="min-h-screen py-20 px-4">
      <h1 className="font-bold text-4xl text-center mb-10 text-amber-300">
        Pokedex
      </h1>
      {/* Use flexbox for card layout & mobile first approach */}
      <section className="flex flex-wrap items-center justify-center gap-4  ">
        {data.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
      </section>
    </main>
  );
}
