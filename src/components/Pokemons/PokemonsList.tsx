import { useContext } from "react"
import { pokemonsGlobalContext } from "./PokemonsGlobalContext"

const PokemonsList = () => {
  const pokemons = useContext(pokemonsGlobalContext)
  return (
    <section>
      <h2>Pokemons</h2>
      <ul>
        {pokemons.Pokemons.map((Item, i) => {
          return <li key={i}>{Item.name}</li>
        })}
      </ul>
    </section>
  )
}

export default PokemonsList
