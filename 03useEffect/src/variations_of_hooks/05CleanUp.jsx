import { useEffect, useState } from 'react'
export default function Variation05() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  function handleClickCount (){
      setCount(count+1);
      setTotal(total+count);
  }
  function handleClickTotal (){
    setTotal(total+1);
}
  //  variation 02
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