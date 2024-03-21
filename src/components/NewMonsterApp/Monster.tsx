import { useContext, useState } from "react"
import { MonsterContext } from "./MonsterContextProvider"

const Monster = () => {
  const { state, dispatch } = useContext(MonsterContext)
  const [name, setName] = useState("")
  const [tentacles, setTentacles] = useState(0)
  const [eyes, setEyes] = useState(2)

  const handleClick = () => {
    if (name.length > 2) {
      dispatch({
        type: "ADD",
        payload: { name: name, eyes: eyes, tentacles: tentacles },
      })
    }
  }
  0
  return (
    <div>
      <ul>
        {state.monsters.map((m) => {
          return (
            <li>
              Name: {m.name}, Tentacles: {m.tentacles}, Eyes: {m.eyes},
            </li>
          )
        })}
      </ul>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <label htmlFor="tentacles">Tentacles</label>
      <input
        id="tentacles"
        type="number"
        onChange={(e) => {
          setTentacles(parseInt(e.target.value))
        }}
      />
      <label htmlFor="eyes">Eyes</label>
      <input
        id="eyes"
        type="number"
        value={eyes}
        onChange={(e) => {
          setEyes(parseInt(e.target.value))
        }}
      />
      <button onClick={handleClick}>Add monster</button>
    </div>
  )
}

export default Monster
