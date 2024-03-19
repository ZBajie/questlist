import { useReducer, useRef } from "react"

type StateProps = {
  sum: number
}
type ActionProps = {
  type: string
  number: number
}

const counter = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "add":
      return {
        sum: state.sum + action.number,
      }
    case "reset":
      return {
        sum: (state.sum = 0),
      }

    default:
      return state
  }
}

const AddRemove = () => {
  const [state, dispatch] = useReducer(counter, { sum: 0 })
  const countNumber = useRef<HTMLInputElement>(null)

  return (
    <section className="add-remove">
      <h2>Add and Remove</h2>
      <p>{state.sum}</p>
      <input type="number" ref={countNumber} />
      <button
        onClick={() => {
          if (countNumber.current) {
            dispatch({
              type: "add",
              number: parseInt(countNumber.current.value, 10),
            })
          }
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", number: 0 })
        }}
      >
        Reset
      </button>
    </section>
  )
}

export default AddRemove
