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
- After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.
- The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.
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
 3. #### runs on every renders of dependies
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
 4. #### if any dependies change , runs all dependies and rerenders .
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
 5. #### Clean function runs when dependies UI change
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
### usecontext 
It looks like you're working with React Context API. Here's a step-by-step guide:

### Step 1: Create Context

```javascript
import React, { createContext, useContext, useState } from 'react';

// 1. Create a context
const MyContext = createContext();
```

### Step 2: Create a Provider Component

This will wrap your components and pass values to them.

```javascript
// 2. Create a Provider component
const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello from Context!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
```

### Step 3: Wrap All Children in the Provider

In your main component or `index.js`, wrap all child components with `MyProvider`.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyProvider from './MyProvider';

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root')
);
```

### Step 4: Consume the Context in a Child Component

Use `useContext` to access the context values in any child component.

```javascript
import React, { useContext } from 'react';
import MyContext from './MyProvider';

const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("Updated Context Value!")}>
        Update Value
      </button>
    </div>
  );
};

export default ChildComponent;
```


