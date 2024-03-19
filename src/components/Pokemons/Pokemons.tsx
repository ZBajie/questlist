import {
  pokemonsGlobalContext,
  initialPokemonsGlobal,
} from "./PokemonsGlobalContext"
import PokemonsList from "./PokemonsList"

const Pokemons = () => {
  return (
    <>
      <pokemonsGlobalContext.Provider value={initialPokemonsGlobal}>
        <PokemonsList />
      </pokemonsGlobalContext.Provider>
    </>
  )
}

export default Pokemons
