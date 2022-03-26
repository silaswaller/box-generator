import './App.css';
import React, { useState } from 'react';

function App() {
  const [boxColor, setBoxColor] = useState("");
  const [size, setSize] = useState("")
  const [colorArr, setColorArr] = useState([]);
  const addColorToArr = (e) => {
    const newObj = {
      color: boxColor,
      size: size,
    };
    console.log('new state object', newObj);
    e.preventDefault();
    setColorArr([...colorArr, newObj]); 
    this.setState({boxColor: ""});
  }
  return(
    <div className="App">
      <form onSubmit={addColorToArr}>
        <div>
          <label htmlFor="color">Color </label>
          <input 
          type="text" 
          id="color" 
          value={boxColor}
          onChange={e => setBoxColor(e.target.value)} />
        
          <label>Size <input 
          type="text"
          onChange={e => setSize(e.target.value)}/></label>
          <button type="submit" id="submit">SUBMIT</button>
        </div>
        
      </form>
      <h1>DISPLAY BOXES</h1>
      {colorArr.map((obj, index) =>  {
        return ( 
        <div 
          key={index}
          style={{
            height: obj.size + "px", 
            width: obj.size + "px", 
            backgroundColor: obj.color,
            display: "inline-block",
            marginLeft: "20px",
          }} 
        ></div>
        );
      })}
    </div>
  );
}

export default App;
