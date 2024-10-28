import React from "react";
const Data =( {name,setName})=>{
    console.log(name, name.name)
    return (
        <>
          <h1>child1 : {name}</h1>
          <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </>
    )
}
export default Data;