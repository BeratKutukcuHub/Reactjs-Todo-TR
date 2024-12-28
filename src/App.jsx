import { useState } from 'react'

import './App.css'
import TodoController from './MainComponent/TodoController'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoController/>
    </>
  )
}

export default App
