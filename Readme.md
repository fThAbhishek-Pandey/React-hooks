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
           1. ###### seting of state 
               - it set the value of state
           2. ###### Rerendering the part component of state
    - ###### initialValue :
      - it is a paratameter of usestate functoin which is initial value of stat.
      - it may be 'integer', 'string', 'boolean'.
    ###### Example :[Couter ]()
```js
   import {useState} from 'React'
   const [count, setCout] = useState(100);
```
### Useeffect 
