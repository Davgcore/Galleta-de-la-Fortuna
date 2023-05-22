
import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementArray'

const arrBackGround = ['1.png','2.png','3.png','4.png','1.jpg','2.jpg','3.jpg','4.jpg']

function App() {

  const initialValue = randomElementFromArray(phrases)
  const initialPath = randomElementFromArray(arrBackGround)
  
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const [backgroundPath, setBackgroundPath] = useState(initialPath)

  const objStyle = {
    backgroundImage: `url('/images/fondo${backgroundPath}')`
  }

  return (
    <div style={objStyle} className='app'>
      <h1 className='app__tittle'>Galleta de la fortuna</h1>
      <ButtonPhrase 
      setBackgroundPath={setBackgroundPath}
      setPhraseRandom={setPhraseRandom} 
      arrBackGround={arrBackGround}
      />
      <PhrasesCard phraseRandom={phraseRandom}
      />
      <p className="card__author"><span className='bold'>Autor:</span>  {phraseRandom.author}</p> 
      
    </div>
  )
  
}

export default App
