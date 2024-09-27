import { useEffect, useState } from 'react'
export default function Variation02() {
  const [count, setCount] = useState(0);
  function handleClick (){
      setCount(count+1);
  }
  //  variation 02
  useEffect(()=>{
    alert("i am useeffect sidefuction of variaton 02");

  },[])
  return (
    <>
      <button onClick={handleClick}>variation02 : {count}</button>
    </>
  )
}