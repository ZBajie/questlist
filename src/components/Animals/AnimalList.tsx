import { useContext, useState } from "react"
import { AnimalContext } from "./AnimalContextProvider"

const AnimalList = () => {
  const { state, dispatch } = useContext(AnimalContext)
  const [animalName, setAnimalName] = useState("")

  const handleClickAdd = () => {
    dispatch({
      type: "ADD",
      payload: { name: animalName, legs: 4 },
    })
  }

  const handleClickRemove = (name: string) => {
    console.log(name)
    dispatch({
      type: "REMOVE",
      payload: name,
    })
  }
  return (
    <section>
      <ul>
        {state.Animals.map((item, i) => {
          return (
            <li key={i} value={item.name}>
              {item.name}{" "}
              <button
                onClick={() => {
                  handleClickRemove(item.name)
                }}
              >
                Remove
              </button>
            </li>
          )
        })}
      </ul>
      <div className="add">
        <h3>Add Animal</h3>
        <label htmlFor="animal-name">Animal name</label>
        <input
          type="text"
          id="animal-name"
          onChange={(e) => {
            setAnimalName(e.target.value)
          }}
        />
        <button onClick={handleClickAdd}>Add</button>
      </div>
    </section>
  )
}

export default AnimalList
