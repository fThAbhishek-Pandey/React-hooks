
import './App.css'
import Variation01 from './variations_of_hooks/01RunsEveryTime';
import Variation02 from './variations_of_hooks/02Runsonly1time';
import Variation03 from './variations_of_hooks/03RunsEverytimeWhenDependiesArrayFuncUpdated';
import Variation04 from './variations_of_hooks/04multipleDependies';
import Variation05 from './variations_of_hooks/05CleanUp';
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'
import DataFetcher from './components/DataFetcher'
function App() {
  
  return (
    <>
     <div>
      <Variation01 />
      <Variation02 />
      <Variation03 />
      <Variation04 />
      <Variation05 />
      </div>
      <div>
      <LoggerComponent />
      <TimerComponent />
      <ResizeComponent />
      <MultiEffectComponent />
      <DataFetcher />
      </div>
    </>
  )
}

export default App
