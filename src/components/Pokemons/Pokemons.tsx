import PokemonsFetch from "./PokemonsFetch"
import {
  pokemonsGlobalContext,
  initialPokemonsGlobal,
} from "./PokemonsGlobalContext"
import PokemonsList from "./PokemonsList"

const Pokemons = () => {
  return (
    <>
      <pokemonsGlobalContext.Provider value={initialPokemonsGlobal}>
        <section className="pokemons">
          <PokemonsList />
          <PokemonsFetch />
        </section>
      </pokemonsGlobalContext.Provider>
    </>
  )
}

export default Pokemons
