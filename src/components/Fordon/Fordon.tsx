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
  name: string
  pipeLength: number
  color: "green" | "camoflage"
  beltLength: number
  turningHead: boolean
}

type Veichles = Cars | Boats | Motorcycles | Tank

const veichles: Veichles[] = [
  {
    type: "cars",
    name: "Volvo",
    color: "white",
    doors: 4,
    wheels: 4,
    toebar: false,
    fuel: "electric",
  },
  {
    type: "motorboat",
    name: "storebro",
    color: "white",
    engines: 2,
    outboards: false,
  },
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
  const cars = veichles.filter((item) => item.type === "cars")

  return (
    <section className="fordon">
      <h2>Veichle</h2>
      <ul>
        {veichles.map((veichle, i) => {
          return <li key={i}>{veichle.type}</li>
        })}
      </ul>
      <label htmlFor="car">1 Car</label>
      <ul id="car">
        {cars.map((car, i) => {
          return (
            <li key={i}>
              {car.name}
              {car.color} {car.type}
            </li>
          )
        })}
      </ul>
      <ul>{veichles[0].type === "cars" && <li>{veichles[0].wheels}</li>}</ul>
      <label htmlFor="cars">cars info</label>
      <ul>
        {cars.map((car, i) => (
          <li key={i}>
            {car.type === "cars" && (
              <>
                <p>Brand: {car.name}</p>
                <p>Fuel: {car.fuel}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Fordon
