
import UserInput from './components/UserInput'
function App() {

  return (
    <>
    <Header/>
    <UserInput 
     userInput={userInput}
    onChange={handleChange} />
    <Results  input={userInput}/>
    </>
  )
}

export default App
