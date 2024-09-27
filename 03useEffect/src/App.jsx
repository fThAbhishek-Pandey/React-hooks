
import './App.css'
import Variation01 from './variations_of_hooks/01RunsEveryTime';
import Variation02 from './variations_of_hooks/02Runsonly1time';
import Variation03 from './variations_of_hooks/03RunsEverytimeWhenDependiesArrayFuncUpdated';
import Variation04 from './variations_of_hooks/04multipleDependies';
import Variation05 from './variations_of_hooks/05CleanUp';
function App() {
  
  return (
    <>
      <Variation01 />
      <Variation02 />
      <Variation03 />
      <Variation04 />
      <Variation05 />
    </>
  )
}

export default App
