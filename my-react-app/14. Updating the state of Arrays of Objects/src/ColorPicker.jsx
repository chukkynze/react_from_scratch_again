import React, {useState} from 'react';

function ColorPicker() {

  const [color, setColor] = useState('#1d8523');

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return(
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display"
           style={{backgroundColor: color}} >
        <div>Selected Color:<br/> {color} </div>
      </div>
      <label>Select a Color:</label>
      <input type="color"
             value={color}
             onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
