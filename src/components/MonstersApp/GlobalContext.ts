import { createContext } from "react"
import { Monsters, MonstersType } from "./MonstersContext"
import { WeponType, Wepons } from "./Wepons"

type GlobalProps = {
  Monsters: MonstersType[]
  Wepons: WeponType[]
}
export const initialGlobal = {
  Monsters: Monsters,
  Wepons: Wepons,
}
export const GlobalContext = createContext({} as GlobalProps)
