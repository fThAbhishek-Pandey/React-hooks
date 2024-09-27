import { useEffect, useState } from 'react'
export default function Variation04() {
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