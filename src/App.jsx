import { useState } from 'react'
import Input from './components/Input'
import CharacterStats from './components/CharacterStats'



function App() {
  const [text, setText] = useState('')

  return (
    <>
     <div className="app-container">
      <h1>Character Counter</h1>
      <p className="app-description">
    Count your words and characters as you type.
  </p>


      <Input text={text} onTextChange={setText} />

      <CharacterStats text={text} />
    </div>  
    </>
  )
}

export default App
