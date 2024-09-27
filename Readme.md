## React hooks
- ### Usestate hooks 
```js
    const   [stateVariable , setStateFunction] = usestate(initialValue) ;
```
- usestate is a fuction witch return a array with length two.
   - ###### first element : 
           it is a varible which store the value of state
   - ###### second element :
           it is a fuction which work mainly two thinks 
           1. seting of state 
            (a) it set the value of state
           2. Rerendering the part component of state
    - ###### initialValue :
      - it is a paratameter of usestate functoin which is initial value of stat.
      - it may be 'integer', 'string', 'boolean'.
    ###### Example :[Couter ]()
```js
   import {useState} from 'React'
   const [count, setCout] = useState(100);
```
### UseEffect 
- useEffect is a hook which provide us to use sideeffect .
###### SideEffect function
 - this is the fuction which is depends on other fuction and we need to re-run that fuction after running that fuction .
 ```js
 useEffect(()=>{
  first
  return ()=>{
    second
  }
 }, [third])
 ```
 - first --> side-effect funcion
 - second --> cleanup function 
 - third --> dependies array
 #### Variation of useeffect :
 1. #### runs on every renders
 ```js
 useEffect(()=>{
    alert("i am useeffect sidefuction of variatoin 01");

  })
 ```
 2. #### runs only one time
 ```js
 useEffect(()=>{
    alert("i am useeffect sidefuction of variaton 02");
  },[])
 ```
 3. #### runs on every renders
 ```js
 function Variation03() {
  const [count, setCount] = useState(0);
  function handleClick (){
      setCount(count+1);
  }
  //  variation 03
  useEffect(()=>{
    alert("i am useeffect sidefuction of variaton 03");

  },[count])
  return (
    <>
      <button onClick={handleClick}>variation03 : {count}</button>
    </>
  )
}
 ```
 4. #### runs on every renders
 ```js
 function Variation04() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  function handleClickCount (){
      setCount(count+1);
      setTotal(total+count);
  }
  function handleClickTotal (){
    setTotal(total+1);
}
  //  variation 04
  useEffect(()=>{
    alert("i am useeffect sidefuction of variaton 04");

  },[count,total])
  return (
    <>
      <div>
        <h5>variation04</h5>
      <button onClick={handleClickCount}>Count: {count}</button>
      <button onClick={handleClickTotal}>total: {total}</button>
      </div>
    </>
  )
}
 ```
 5. #### runs on every renders
 ```js
 function Variation05() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  function handleClickCount (){
      setCount(count+1);
      setTotal(total+count);
  }
  function handleClickTotal (){
    setTotal(total+1);
}
  //  variation 05
  useEffect(()=>{
    alert("i am useeffect sidefuction of variaton 05");
    return ()=>{
        alert("count is unmount from UI variation05");
    }
  },[count])
  return (
    <>
      <div>
        <h5>variation05</h5>
      <button onClick={handleClickCount}>Count: {count}</button>
      <button onClick={handleClickTotal}>total: {total}</button>
      </div>
    </>
  )
}
 ```
