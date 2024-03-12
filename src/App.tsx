import './App.css'
import { sha1 } from 'object-hash';

function App() {

  const obj = {
    name: "KEVIN",
    age: 30
  };

  const obj2 = {
    age: 30,
    name: "KEVIN"
  }

  return (
    <div>
      Vite 5 + React
      <div>
        { sha1(obj) }
      </div>
      <div>
        { sha1(obj2) }
      </div>
      <div>
        The following text is encoded and decoded with Buffer: { Buffer.from('Hello!').toString() }..
      </div>
    </div>
  )
}

export default App
