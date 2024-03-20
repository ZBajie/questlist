type Cars = {
  type: "cars"
  name: string
  color: string
  doors: number
  wheels: number
  toebar: boolean
  fuel: "electric" | "bensin" | "diesel" | "hybrid"
}
type MotorBoats = {
  type: "motorboat"
  name: string
  color: string
  engines: number
  outboards: boolean
}
type SailBoats = {
  type: "sailboat"
  name: string
  color: string
  sails: number
}
type Boats = MotorBoats | SailBoats

type Motorcycles = {
  type: "motorcycles"
  name: string
  color: string
  wheels: number
  killcount: number
  offroad: boolean
}

type Tank = {
  type: "tank"
  namn: string
  pipeLength: number
  color: "green" | "camoflage"
  beltLength: number
  turningHead: boolean
}

type Veichles = Cars | Boats | Motorcycles | Tank

const cars: Veichles[] = [
  {
    type: "cars",
    name: "Volvo",
    color: "white",
    doors: 4,
    wheels: 4,
    toebar: false,
    fuel: "electric",
  },
]

const boats: Veichles[] = [
  {
    type: "motorboat",
    name: "storebro",
    color: "white",
    engines: 2,
    outboards: false,
  },
]
const motorcycles: Veichles[] = [
  {
    type: "motorcycles",
    name: "honda",
    color: "green",
    wheels: 2,
    killcount: 2,
    offroad: false,
  },
]
const Fordon = () => {
  return (
    <section className="fordon">
      <h2>Veichle</h2>
    </section>
  )
}

export default Fordon
