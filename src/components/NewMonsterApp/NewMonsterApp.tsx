import Monster from "./Monster"
import MonsterContextProvider from "./MonsterContextProvider"

function NewMonstersApp() {
  return (
    <MonsterContextProvider>
      <section className="new-monsters-app">
        <h1>Demo</h1>
        <Monster />
      </section>
    </MonsterContextProvider>
  )
}

export default NewMonstersApp
