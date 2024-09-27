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
      alert("i am useEffect");
 })
 ```