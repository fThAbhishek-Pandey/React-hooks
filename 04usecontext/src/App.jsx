import { createContext, useContext, useState } from 'react'
import ChaildA from './component/chaildA'
export const userContext = createContext()// step 1 create context
// step 2: wrap all the child inside a provider
// step 3: pass value
// step 4: consume it in consumer
export const ThemeContext  = createContext();
function App() {
  const [name, setName] = useState({name:"Abhishek"});
  const [theme, setTheme]= useState('light');
   const value = {
    theme, setTheme,
    name
   }
  return (
    <>
     <h3>Abhishek :-
     
     </h3>
     {/* <userContext.Provider value={value}>
         <ChaildA />
      </userContext.Provider> */}


        <ThemeContext.Provider value={value}  > 
          <div  className={`container ${theme==='light' ? 'light':'dark'}`}>
            <ChaildA />
          </div>
         
     </ThemeContext.Provider>
     
    </>
  )
}

export default App
