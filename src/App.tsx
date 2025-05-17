// import reactLogo from './assets/react.svg'
// import ChatBox from './chat';
// import './App.css'

// function App() {
  
//   return (
//     <>
//       <div>
//         <p>shosho的chat bot</p>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//         <ChatBox></ChatBox>
//       </div>
//     </>
//   )
// }

// export default App
import React from "react";
import CodeReview from "./CodeReview";

const App: React.FC = () => {
  return (
    <div>
      <h1>My Code Review App</h1>
      <CodeReview />
    </div>
  );
};

export default App;