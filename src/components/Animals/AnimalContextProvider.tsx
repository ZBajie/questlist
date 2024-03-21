import { createContext, useReducer } from "react"
import {
  AnimalGlobalProps,
  AnimalProps,
  initialAnimals,
} from "./initialAnimals"
// create AnimalContext
export const AnimalContext = createContext<{
  state: AnimalGlobalProps
  dispatch: React.Dispatch<Action>
}>({ state: initialAnimals, dispatch: () => null })

// AnimalReducer
type Action =
  | { type: "ADD"; payload: AnimalProps }
  | {
      type: "REMOVE"
      payload: string
    }

const animalReducer = (state: AnimalGlobalProps, action: Action) => {
  switch (action.type) {
    case "ADD":
      return {
        Animals: [...state.Animals, action.payload],
      }
    case "REMOVE":
      return {
        Animals: state.Animals.filter((animals) => {
          return animals.name !== action.payload
        }),
      }
    default:
      return state
  }
}

// AnimalContextProvider

type AnimalContextProviderProps = {
  children: React.ReactNode
}

const AnimalContextProvider = ({ children }: AnimalContextProviderProps) => {
  const [state, dispatch] = useReducer(animalReducer, initialAnimals)

  return (
    <AnimalContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimalContext.Provider>
  )
}

export default AnimalContextProvider
