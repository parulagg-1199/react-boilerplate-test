import React from 'react';
import Input from '../../component/inputField/input';

function Auto() {
  return (
    <div className="App">
      <div className="container">
        <h2 style={{fontFamily:"cursive", textAlign:"Center", padding:"20px"}}>AutoSelector</h2>

         {/* Reusable component which can be called anywhere */}
        <Input />
      </div>
    </div>
  );
}

export default Auto;
