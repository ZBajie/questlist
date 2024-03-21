import { useContext } from "react"
import { LegoContext } from "./LegoContextProvider"

const LegoList = () => {
  const legos = useContext(LegoContext)
  return (
    <>
      <h3>LegoList</h3>
      <ul>
        {legos.initialLego.Lego.map((lego, i) => {
          return <li key={i}>{lego.name}</li>
        })}
      </ul>
    </>
  )
}

export default LegoList
