import { useEffect, useState } from "react"

type Root = {
  count: number
  next: string
  previous: string
  results: Result[]
}

type Result = {
  name: string
  url: string
}
const PokemonsFetch = () => {
  const [pokemonsList, setPokemonsList] = useState({} as Root)

  useEffect(() => {
    let isMounted = true

    const getPokemons = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon/"
      try {
        const result = await fetch(url)
        const data = await result.json()
        if (isMounted) {
          setPokemonsList(data)
        }
      } catch (err) {
        if (isMounted) {
          console.error(err)
        }
      } finally {
        if (isMounted) {
          console.log("ok")
        }
      }
    }
    getPokemons()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section>
      <h2>Pokemons Fetch</h2>
      <p>{pokemonsList.results && pokemonsList.results[1].name}</p>
    </section>
  )
}

export default PokemonsFetch
