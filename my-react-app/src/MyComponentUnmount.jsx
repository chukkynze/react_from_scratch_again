import {useEffect, useState} from 'react';

function MyComponentUnmount(){

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {

    window.addEventListener("resize", handleResize);
    console.log('EVENT LISTENER ADDED.');

    // Run on unmount of this component
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log('EVENT LISTENER REMOVED.');
    }
  }, []);


  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [height, width]);


  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
  }

  return(<>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>
  </>);
}

export default MyComponentUnmount
