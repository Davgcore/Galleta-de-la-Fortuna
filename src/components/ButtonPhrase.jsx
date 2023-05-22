import getRandomElementFromArray from "../utils/randomElementArray"
import phrase from "../utils/phrases.json"
const ButtonPhrase = ({ setPhraseRandom,setBackgroundPath,arrBackGround }) => {

const handlePhrase = () => {
    const newRandomPhrase = getRandomElementFromArray(phrase)
    setPhraseRandom(newRandomPhrase)
    const newPath = getRandomElementFromArray(arrBackGround)
    setBackgroundPath(newPath)
}


return (
    <button className="btn" onClick={handlePhrase}>Probar suerte</button>
)
}

export default ButtonPhrase