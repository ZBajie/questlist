export type AnimalProps = {
  name: string
  legs: number
}

export type AnimalGlobalProps = {
  Animals: AnimalProps[]
}

export const initialAnimals: AnimalGlobalProps = {
  Animals: [
    {
      name: "rabbit",
      legs: 4,
    },
    {
      name: "bird",
      legs: 2,
    },
  ],
}
