// context som lagrar lärare.

import { createContext } from "react"
import uuid from "react-uuid"

type TeachersProps = {
  id: string
  name: string
  subject: string
}

export const initialTeachers: TeachersProps[] = [
  {
    id: uuid(),
    name: "Kalle",
    subject: "Math",
  },
  {
    id: uuid(),
    name: "Anna",
    subject: "Math",
  },
  {
    id: uuid(),
    name: "Lisa",
    subject: "Math",
  },
  {
    id: uuid(),
    name: "Svea",
    subject: "Math",
  },
]

export const TeachersContext = createContext([] as TeachersProps[])
