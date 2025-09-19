import { useState } from "react"
import "./App.css"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <h1 className="title">Count: {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </main>
  )
}
