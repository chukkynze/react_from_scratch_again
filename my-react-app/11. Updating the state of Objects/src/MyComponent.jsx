import React, {useState} from 'react';

function MyComponent() {

  const [car, setCar] = useState({
    year: 2010,
    make: "Nissan",
    model: "Altima",
  });

  function handleCarYearChange(event) {
    setCar(prevCar => ({...prevCar, year: event.target.value}));
  }

  function handleCarMakeChange(event) {
    setCar(prevCar => ({...prevCar, make: event.target.value}));
  }

  function handleCarModelChange(event) {
    setCar(prevCar => ({...prevCar, model: event.target.value}));
  }

  return(
    <div>
      <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

      <input type="number" value={car.year}  onChange={handleCarYearChange}/><br/>
      <input type="text"   value={car.make}  onChange={handleCarMakeChange}/><br/>
      <input type="text"   value={car.model} onChange={handleCarModelChange}/><br/>
    </div>
  );
}

export default MyComponent;
