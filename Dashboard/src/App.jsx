import { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <div className="Appglass">
       <Sidebar />
    </div>
    </div>
  );
}

export default App;
