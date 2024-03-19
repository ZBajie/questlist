import { createContext } from "react"
import { Pokemons, initialPokemons } from "./PokemonsContext"

type PokemonsGlobalProps = {
  Pokemons: Pokemons[]
}

export const initialPokemonsGlobal: PokemonsGlobalProps = {
  Pokemons: initialPokemons,
}

export const pokemonsGlobalContext = createContext({} as PokemonsGlobalProps)
