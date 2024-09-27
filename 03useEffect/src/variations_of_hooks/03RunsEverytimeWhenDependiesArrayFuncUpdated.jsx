import { useEffect, useState } from 'react'
export default function Variation03() {
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