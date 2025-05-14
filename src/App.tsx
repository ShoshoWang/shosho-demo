import reactLogo from './assets/react.svg'
import ChatBox from './chat';
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <p>shosho的chat bot</p>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <ChatBox></ChatBox>
      </div>
    </>
  )
}

export default App
