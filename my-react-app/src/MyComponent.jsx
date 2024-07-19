import {useEffect, useRef, useState} from 'react';

function MyComponent() {

  // let [number, setNumber] =  useState(0);

  const inputRef = useRef(0);

  useEffect(() => {
    console.log("Component rendered");
  });

  function handleClick(){
    // setNumber(prevNumber => prevNumber + 1);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "blue";
  }

  return(
    <>
      <button onClick={handleClick}>
        Click me!
      </button>
      <input ref={inputRef}/>
    </>
  );
}

export default MyComponent;
