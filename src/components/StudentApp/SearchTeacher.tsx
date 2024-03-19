import { useContext, useRef, useState } from "react"
import { GlobalContext } from "./GlobalContext"

const SearchTeacher = () => {
  const global = useContext(GlobalContext)
  const searchName = useRef<HTMLInputElement>(null)

  const [teacherIndex, setTeacherIndex] = useState<number>(-1)

  const onClick = () => {
    if (searchName.current) {
      const name: string = searchName.current.value
      setTeacherIndex(-1)
      global.teachers.map((teacher, index) => {
        if (teacher.name.toLowerCase() === name.toLowerCase()) {
          setTeacherIndex(index)
          console.log(index)
        }
      })
    }
  }
  return (
    <section className="search-teacher">
      <h2>Search teacher</h2>
      <input type="text" placeholder="Name" ref={searchName} />
      <button onClick={onClick}>Search</button>
      {teacherIndex >= 0 && (
        <div className="teacher-card">
          <h3>{global.teachers[teacherIndex].name}</h3>
          <p>Subject: {global.teachers[teacherIndex].subject}</p>
        </div>
      )}
    </section>
  )
}

export default SearchTeacher
