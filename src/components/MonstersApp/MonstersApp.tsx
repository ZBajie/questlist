import { GlobalContext, initialGlobal } from "./GlobalContext"
import MonstersList from "./MonstersList"

const MonstersApp = () => {
  return (
    <GlobalContext.Provider value={initialGlobal}>
      <section className="monsters-app">
        <h2>Monsters app</h2>
        <MonstersList />
      </section>
    </GlobalContext.Provider>
  )
}

export default MonstersApp
