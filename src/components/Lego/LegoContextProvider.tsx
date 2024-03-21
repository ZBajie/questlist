import { createContext } from "react"
import { initialLego } from "./initialLego"

// lego createContext

export const LegoContext = createContext({ initialLego })

// context Provider

type LegoContextProviderType = {
  children: React.ReactNode
}

const LegoContextProvider = ({ children }: LegoContextProviderType) => {
  return (
    <LegoContext.Provider value={{ initialLego }}>
      {children}
    </LegoContext.Provider>
  )
}

export default LegoContextProvider
