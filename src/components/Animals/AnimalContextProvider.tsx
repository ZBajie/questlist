import { createContext } from "react"

export type AnimalProps = {
  name: string
  legs: number
}

export type AnimalGlobalProps = {
  Animals: AnimalProps[]
}

export const initialAnimals: AnimalGlobalProps = {
  Animals: [
    {
      name: "rabbit",
      legs: 4,
    },
    {
      name: "bird",
      legs: 2,
    },
  ],
}

// createContext

export const AnimalContext = createContext<AnimalGlobalProps>(initialAnimals)

// AnimalContextProvider

type AnimalContextProviderProps = {
  children: React.ReactNode
}

const AnimalContextProvider = ({ children }: AnimalContextProviderProps) => {
  return (
    <AnimalContext.Provider value={initialAnimals}>
      {children}
    </AnimalContext.Provider>
  )
}

export default AnimalContextProvider
