import AnimalContextProvider from "./AnimalContextProvider"
import AnimalList from "./AnimalList"

const AnimalApp = () => {
  return (
    <AnimalContextProvider>
      <section className="animal-app">
        <h2>AnimalApp</h2>
        <AnimalList />
      </section>
    </AnimalContextProvider>
  )
}

export default AnimalApp
