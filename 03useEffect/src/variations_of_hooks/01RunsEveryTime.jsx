import { useEffect, useState } from 'react'
export default function Variation01() {
  const [count, setCount] = useState(0);
  function handleClick (){
      setCount(count+1);
  }
  //  variation 1
  useEffect(()=>{
    alert("i am useeffect sidefuction of variatoin 01");

  })

  return (
    <>
      <button onClick={handleClick}>variation01 : {count}</button>
    </>
  )
}
