import uuid from "react-uuid"
import { WeponType, Wepons } from "./Wepons"

export type MonstersType = {
  id: string
  name: string
  heigth: number
  wepons: WeponType[]
}

export const Monsters: MonstersType[] = [
  {
    id: uuid(),
    name: "Bajie",
    heigth: 22,
    wepons: Wepons,
  },
  {
    id: uuid(),
    name: "Bork",
    heigth: 15,
    wepons: Wepons,
  },
  {
    id: uuid(),
    name: "Slayer",
    heigth: 7,
    wepons: Wepons,
  },
  {
    id: uuid(),
    name: "Ogg",
    heigth: 11,
    wepons: Wepons,
  },
]
