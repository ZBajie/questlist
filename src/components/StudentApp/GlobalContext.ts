// context som lagrar lärare.

import { createContext } from "react"
import { initialStudents } from "./StudentContext"
import { initialTeachers } from "./TeacherContext"

type GlobalProps = {
  teachers: Teachers[]
  students: Students[]
  addTeacher: (newTeacher: Teachers) => void
  addStudent: (newStudent: Students) => void
}

type Teachers = {
  id: string
  name: string
  subject: string
}

type Students = {
  id: string
  name: string
  age: number
}

export const initialGlobal: GlobalProps = {
  students: initialStudents,
  teachers: initialTeachers,
  addTeacher: () => {},
  addStudent: () => {},
}

//export const GlobalContext = createContext({} as GlobalProps)
export const GlobalContext = createContext<GlobalProps>(initialGlobal)
