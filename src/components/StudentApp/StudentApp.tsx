import { GlobalContext, initialGlobal } from "./GlobalContext"
import SearchTeacher from "./SearchTeacher"
import StudentList from "./StudentList"
import TeacherList from "./TeacherList"

const StudentApp = () => {
  return (
    <GlobalContext.Provider value={initialGlobal}>
      <section className="student-app">
        <h1>Student Context Demo Stuff</h1>
        <StudentList />
        <TeacherList />
        <SearchTeacher />
      </section>
    </GlobalContext.Provider>
  )
}

export default StudentApp
