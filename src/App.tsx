import reactLogo from './assets/react.svg'
import UserProfile from './usePro';
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <p>shosho的demo</p>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <UserProfile></UserProfile>
      </div>
    </>
  )
}

export default App
