import  Data  from './components/data'
import Child2 from './components/child2/child2'
import './App.css'
import { useState } from 'react'
console.log("I am data : ",Data)
function App() {
    // create state 
    //  manage state
    //  change state
    //  synchronization of state in all child
    const [name, setName] = useState("Abhishek Data");

  return (
    <>
        <h1>Parents : {name}</h1>
        <Data name={name} setName= {setName} />
        <Child2 name={name} setName= {setName} />
    </>
  )
}
export default App
