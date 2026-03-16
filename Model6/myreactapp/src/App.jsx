import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Components/Greeting'
import BigCats from './Components/BigCats'
import Emoji from './Components/Emoji'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
     <Greeting name = "John"/>
      <BigCats></BigCats>
      <Emoji></Emoji>
    </>
  )
}

export default App
