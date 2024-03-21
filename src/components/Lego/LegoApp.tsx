import LegoContextProvider from "./LegoContextProvider"
import LegoList from "./LegoList"

const LegoApp = () => {
  return (
    <LegoContextProvider>
      <section className="lego">
        <h2>Lego</h2>
        <LegoList />
      </section>
    </LegoContextProvider>
  )
}

export default LegoApp
