import React from 'react';
import './MathOperation.css'; // Import your CSS file for styling

const MathOperation = ({ firstNumber, secondNumber, operation }) => {
  return (
    <div className='math-operation'>
      <div className='operator'>{operation}</div>
      <div className='numbers'>
        <div className='number'>{firstNumber}</div>
        <div className='number'>{secondNumber}</div>
        {/* <hr className='separator' /> */}
      </div>
    </div>
  );
};

export default MathOperation;
