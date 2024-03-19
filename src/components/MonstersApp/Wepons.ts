import uuid from "react-uuid"

export type WeponType = {
  id: string
  name: string
  damage: number
  color: string
  break: boolean
}

export const Wepons: WeponType[] = [
  {
    id: uuid(),
    name: "LongSword",
    damage: 1000,
    color: "black",
    break: false,
  },
  {
    id: uuid(),
    name: "BlackAxe",
    damage: 500,
    color: "black",
    break: false,
  },
  {
    id: uuid(),
    name: "Rusty Dagger",
    damage: 5,
    color: "red",
    break: false,
  },
  {
    id: uuid(),
    name: "double axe",
    damage: 500,
    color: "silver",
    break: false,
  },
  {
    id: uuid(),
    name: "katana",
    damage: 750,
    color: "gold",
    break: false,
  },
]
