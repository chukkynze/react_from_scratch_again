import {useEffect, useState} from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // 1. useEffect(() => {})             Runs after every re-render of component for any reason
  // useEffect(() => {
  //   document.title = `Count ${count}`;
  // });

  // 2. useEffect(() => {}, [])         Runs only on mount - great for one-and-done code
  // useEffect(() => {
  //   document.title = `This is the title of the page`;
  // }, [count]);

  // 3. useEffect(() => {}, [value(s))  Runs on mount + when value changes - very specific
  useEffect(() => {
    document.title = `Count ${count} - ${color}`;
  }, [color, count]);

  function addCount(){
    setCount(prevCount => prevCount + 1);
  }

  function subtractCount(){
    setCount(prevCount => prevCount - 1);
  }

  function changeColor(){
    setColor(prevColor => prevColor === "green" ? "red" : "green")
  }

  return(
    <>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent;
