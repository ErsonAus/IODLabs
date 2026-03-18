import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Components/Greeting'
//import BigCats from './Components/BigCats'
import Emoji from './Components/Emoji'
//import BigCats1 from './Components/BigCats1'
import Calculator from './Components/Calculator'
import AddCatForm from './Components/AddCatForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Greeting name = "John"/>
       {/*<BigCats></BigCats>*/}
      <Emoji></Emoji>
      {/*<BigCats1></BigCats1>*/}
      <Calculator></Calculator>
      <AddCatForm></AddCatForm>
      
    </>
  )
}

export default App
