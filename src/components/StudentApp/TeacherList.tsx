import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

const TeacherList = () => {
  const global = useContext(GlobalContext)
  return (
    <section className="teachers-list">
      <h2>Teachers</h2>
      <ul>
        {global.teachers.map((teacher) => {
          return (
            <li key={teacher.id}>
              {teacher.name}: Subject: {teacher.subject}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default TeacherList
