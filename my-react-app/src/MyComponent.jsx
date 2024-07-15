import React, {useState} from 'react';

function MyComponent() {

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState("");

  function handleAddCar(){
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    }

    setCars(prevCars => [...prevCars, newCar])

    setCarYear(prevCarYear => new Date().getFullYear())
    setCarMake(prevCarMake => "")
    setCarModel(prevCarModel => "")
  }


  function handleRemoveCar(carIndex){
    setCars(prevCars => prevCars.filter((_, arrayIndex) => arrayIndex !== carIndex));
  }


  function handleYearChange(event){
    setCarYear(event.target.value);
  }


  function handleMakeChange(event){
    setCarMake(event.target.value);
  }


  function handleModelChange(event){
    setCarModel(event.target.value);
  }


  return(
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, carIndex) => (
          <li key={carIndex} onClick={() => handleRemoveCar(carIndex)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input type="number"
             value={carYear}
             onChange={handleYearChange}
      />
      <input type="text"
             value={carMake}
             onChange={handleMakeChange}
             placeholder="Enter car make"
      />
      <input type="text"
             value={carModel}
             onChange={handleModelChange}
             placeholder="Enter car model"
      />

      <button onClick={handleAddCar} >Add Car</button>
    </div>
  );
}

export default MyComponent;
