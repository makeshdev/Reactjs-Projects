import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ffffff");

  function colorPicker(e) {
    setColor(e.target.value);
  }
  return (
    <div className="color_picker">
      <h2>Color Picker</h2>
      <div style={{ backgroundColor: color }}>
        <p>The color Code is {color}</p>
      </div>
      <p>Select the color</p>
      <input type="color" value={color} onChange={colorPicker} />
    </div>
  );
}

export default App;
