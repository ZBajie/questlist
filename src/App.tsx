import AddRemove from "./components/AddRemove/AddRemove"
import Fordon from "./components/Fordon/Fordon"
import MonstersApp from "./components/MonstersApp/MonstersApp"
import NewMonstersApp from "./components/NewMonsterApp/NewMonsterApp"
import Pokemons from "./components/Pokemons/Pokemons"
import QuestList from "./components/QuestList/QuestList"
import StudentApp from "./components/StudentApp/StudentApp"

function App() {
  return (
    <>
      <NewMonstersApp />
      <Fordon />
      <Pokemons />
      <MonstersApp />
      <StudentApp />
      <AddRemove />
      <QuestList />
    </>
  )
}

export default App
