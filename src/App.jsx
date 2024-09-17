import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState(''); // Store the input value
  const [result, setResult] = useState(''); // Store the result

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString()); // Evaluate the input (be cautious of eval)
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{input.length > 1 ? input : ''}</div>
        <div className="result">{result || (input.length <= 1 ? input : '0')}</div>
      </div>
      <div className="buttons">
        <button onClick={clear} className="clear">AC</button>
        <button onClick={backspace} className="del">Del</button>
        <button onClick={() => handleClick('/')}>&divide;</button>
        <button onClick={() => handleClick('*')}>&times;</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>&ndash;</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('0')} className="zero">0</button>
        <button onClick={calculate} className="equals">=</button>
      </div>
    </div>
  );
};

export default Calculator;
