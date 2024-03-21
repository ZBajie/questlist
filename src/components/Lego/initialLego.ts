import uuid from "react-uuid"

export type LegoType = {
  id: string
  name: string
  size: number
}

export type LegoGlobalState = {
  Lego: LegoType[]
}

export const initialLego: LegoGlobalState = {
  Lego: [
    {
      id: uuid(),
      name: "christmas train",
      size: 578,
    },
    {
      id: uuid(),
      name: "Trädkojan",
      size: 1011,
    },
  ],
}
