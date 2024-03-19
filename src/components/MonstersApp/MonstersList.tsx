import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

const MonstersList = () => {
  const global = useContext(GlobalContext)
  return (
    <section>
      <h3>MonstersList</h3>
      <ul>
        {global.Monsters.map((monster) => {
          return (
            <li key={monster.id}>
              {monster.name}:
              {
                monster.wepons[
                  Math.floor(Math.random() * monster.wepons.length)
                ].name
              }
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default MonstersList
