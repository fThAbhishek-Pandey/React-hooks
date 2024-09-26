import React from "react";
const Child2 =( {name,setName})=>{
    console.log(name, name.name)
    return (
        <>
          <h1>Child2 : {name}</h1>
          <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </>
    )
}
export default Child2;