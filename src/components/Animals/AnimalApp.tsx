import AnimalContextProvider from "./AnimalContextProvider"

const AnimalApp = () => {
  return (
    <AnimalContextProvider>
      <section className="animal-app">
        <h2>AnimalApp</h2>
      </section>
    </AnimalContextProvider>
  )
}

export default AnimalApp
