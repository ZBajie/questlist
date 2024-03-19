// contexten som lagrar alla studenter (namn)

import { createContext } from "react"
import uuid from "react-uuid"

type Student = {
  id: string
  name: string
  age: number
}

// eslint-disable-next-line react-refresh/only-export-components
export const initialStudents: Student[] = [
  {
    id: uuid(),
    name: "Bosse",
    age: 34,
  },
  {
    id: uuid(),
    name: "Stina",
    age: 46,
  },
  {
    id: uuid(),
    name: "Kim",
    age: 26,
  },
]

export const StudentContext = createContext([] as Student[])
