import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'
import {ThemeContext} from '../App'
const ChildC = () => {
    // const {name} = useContext(userContext);
    const {theme,setTheme} = useContext(ThemeContext);
    function handelClick(){
           if(theme=='light' ) setTheme('dark')  
           else setTheme('light');
    }
  return (
    <div>
        <h3>i am C</h3>
        {/* <h4>{name}</h4> */}
        <h4>{theme}</h4>
        <button onClick={handelClick}>Change Theme</button>
    </div>
  )
}

export default ChildC