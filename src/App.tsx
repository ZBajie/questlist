import AddRemove from "./components/AddRemove/AddRemove"
import MonstersApp from "./components/MonstersApp/MonstersApp"
import Pokemons from "./components/Pokemons/Pokemons"
import QuestList from "./components/QuestList/QuestList"
import StudentApp from "./components/StudentApp/StudentApp"

function App() {
  return (
    <>
      <Pokemons />
      <MonstersApp />
      <StudentApp />
      <AddRemove />
      <QuestList />
    </>
  )
}

export default App
