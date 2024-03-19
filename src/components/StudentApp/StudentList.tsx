// komponent för att visa alla studenter (namn)

import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

const StudentList = () => {
  const global = useContext(GlobalContext)

  return (
    <div>
      <h2>StudentList</h2>
      <ul>
        {global.students.map((student) => {
          return (
            <li key={student.id}>
              Name: {student.name}, Age: {student.age}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StudentList
