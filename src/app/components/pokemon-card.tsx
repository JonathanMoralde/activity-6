import React from "react";
import { Pokemon } from "../models/models";
import Image from "next/image";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const pokemonTypeColors: { [key: string]: string } = {
    normal: "bg-gray-400",
    fire: "bg-red-400",
    water: "bg-blue-400",
    electric: "bg-yellow-400",
    grass: "bg-green-400",
    ice: "bg-cyan-400",
    fighting: "bg-orange-400",
    poison: "bg-purple-400",
    ground: "bg-amber-400",
    flying: "bg-sky-400",
    psychic: "bg-pink-400",
    bug: "bg-lime-400",
    rock: "bg-stone-400",
    ghost: "bg-indigo-400",
    dragon: "bg-violet-400",
    dark: "bg-gray-600",
    steel: "bg-slate-400",
    fairy: "bg-rose-400",
  };

  return (
    <div className=" w-full md:w-[48%] lg:w-[24%] bg-slate-600  rounded-3xl flex flex-col items-center mt-24 px-4 pb-4">
      {/* image */}
      <div className="mt-[-5rem] mb-4">
        <div className="relative w-[10rem] h-[10rem] dark:bg-slate-400 rounded-full">
          <Image
            src={pokemon.sprites.front_default}
            alt={`Image of ${pokemon.name}`}
            fill
            sizes="w-auto h-auto"
            priority
          />
        </div>
      </div>

      {/* name */}
      <div className="mb-5 flex items-center gap-2">
        <h2 className="font-bold capitalize text-xl">{pokemon.name}</h2>
        {pokemon.types.map((type) => (
          <div
            className={`${pokemonTypeColors[type.type.name]} px-2 rounded-xl`}
          >
            <p className="text-gray-700 text-sm ">{type.type.name}</p>
          </div>
        ))}
      </div>

      {/* Height & Weight */}
      <div className="flex justify-around w-full text-gray-300 text-center mb-5">
        <div>
          <h3 className="font-semibold  ">Height</h3>
          <p className="text-amber-300">{pokemon.height / 10} m</p>
        </div>

        <div>
          <h3 className="font-semibold  ">Weight</h3>
          <p className="text-amber-300">{pokemon.weight / 10} kg</p>
        </div>
      </div>

      {/* stat details */}
      <div className="w-full text-gray-300">
        <h3 className="text-center mb-1">Base Stats</h3>

        {pokemon.stats.map((stat) => {
          const statPercent = ((stat.base_stat / 255) * 100).toFixed(0);
          console.log(statPercent);
          return (
            <div className="flex items-center gap-5 mb-1">
              <div className="flex justify-between items-center w-1/2">
                <h4>{stat.stat.name}</h4>
                <p className="text-amber-300">{stat.base_stat}</p>
              </div>
              <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-teal-400 h-2.5 rounded-full"
                  style={{ width: `${statPercent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
