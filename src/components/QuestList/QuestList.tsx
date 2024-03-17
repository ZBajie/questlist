import { useState } from "react"
import { Quest } from "./QuestProps"
import startQuests from "./startquests.json"

const QuestList = () => {
  const [quests, setQuests] = useState<Quest[]>(startQuests.startQuests)

  return (
    <section className="quest-list">
      <h2>Quests</h2>
      <ul>
        {quests &&
          quests.map((item) => {
            return (
              <li key={item.id}>
                <span
                  onClick={() => {
                    setQuests(
                      quests.map((q) => {
                        if (q.id === item.id) {
                          if (q.complete === true) {
                            return { ...q, complete: false }
                          } else {
                            return { ...q, complete: true }
                          }
                        } else {
                          return q
                        }
                      })
                    )
                  }}
                >
                  {item.complete ? <p>✔</p> : <p>❌</p>}
                </span>
                {item.description}
              </li>
            )
          })}
      </ul>
    </section>
  )
}

export default QuestList
