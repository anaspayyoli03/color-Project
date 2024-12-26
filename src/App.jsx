// import './app.css';
// import Company from './Company'




// function App(){
//   return(
//     <div className='App'>

//     </div>

        

//   );

// }
// <Company/>
import React, { useState } from 'react';
// import {Company} from './Company'


function App() {
  // Set initial background color
  const [bgColor, setBgColor] = useState('white');

  // Function to change background color
  const changeColor = () => {
    // Define the possible colors
    const colors = ['red', 'blue', 'green', 'yellow', 'pink'];
    // Randomly select a color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', width :'600vh' }}>
      <button onClick={changeColor} style={{ textAlign:'center', padding: '10px 20px',paddingTop:'50px',   fontSize: '16px' }}>
        Change Background Color
      </button>
    
     
      {/* <Company/> */}
    </div>
   
  );
}

export default App;





