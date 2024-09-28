import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const myalert =   alert("i am datafetcher");
  useEffect(() => {
      myalert;
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [count]);
  //it willl run only on 1st render

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      <button onClick={()=>setCount(count+1)}>countDatafetcher : {count}</button>
    </div>
  );
}
export default DataFetcher