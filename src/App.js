import React, {useState} from 'react';
import { evaluate, factorial, sqrt, pow, log10, log, sin, cos, tan } from 'mathjs'
import "./style.css"


// create a function useState hook , to make reaction values for calculations of calculator

const App = () =>{
  const [input, setInput] =  useState('');  // initialize it to => ''
  const [ans, setAns] = useState('');
  
  //function to handle clicks for differents calculations
  const handclick = (e) =>{       
    const value = e.target.value;

    if(value === 'sin'){
      const number = parseFloat(input);
      if(!isNaN(number)){
        try{
          setInput(sin((number * Math.PI) / 180).toString())
        }
        catch{
          setInput('Error');
        }
      }
      else{
        setInput('Error')
      }
      return;
    }


    if(value === 'cos'){
      const number = parseFloat(input);
      if(!isNaN(number)){
        try{
          setInput(cos((number * Math.PI) / 180).toString())
        }
        catch{
          setInput('Error');
        }
      }
      else{
        setInput('Error')
      }
      return;
    }

    if(value === 'tan'){
      const number = parseFloat(input);
      if(!isNaN(number)){
        try{
          setInput(tan((number * Math.PI) / 180).toString())
        }
        catch{
          setInput('Error');
        }
      }
      else{
        setInput('Error')
      }
      return;
    }

    if(value === 'x⁻¹'){
    const number = parseFloat(input);
    if(number !==0 && !isNaN(number)){
      try{
        setInput((1/number).toString())
      }
      catch(e){
        setInput('Error');
      }
    }
    else{
      setInput('Error');
    }
    return;
  }

  
    if(value === 'x²'){
      const number = parseFloat(input);
      if(!isNaN(number)){

        try{
          setInput(pow(number, 2).toString())
        }
        catch(e){
          setInput('Error');
        }
      }
      else{
        setInput('Error');
      }
      return;
    }
   
    if(value === 'x³'){
      const number = parseFloat(input);
      if(!isNaN(number)){

        try{
          setInput(pow(number, 3).toString())
        }
        catch(e){
          setInput('Error');
        }
      }
      else{
        setInput('Error');
      }
      return;
    }

    
    if (value === '√'){
      const number = parseFloat(input);
      if(number >=0 && !isNaN(number)){
        try{
          setInput(sqrt(number).toString())
        }
        catch(e){
          setInput('Error');
        }
      }
      else{
        setInput('Error');
      }
      return;
    }
    

    if (value === '^') {
      setInput(input + '^');
      return;
    }

    if(value === '%'){
      const number = parseFloat(input);
      if(!isNaN(number)){
        try{
          setInput((number/100).toString())
        }
        catch{
          setInput('Error');
        }
      }
      else{
        setInput('Error')
      }
      return;
    }
      
    //calculate factorial
    if(value === 'x!'){
      const number = parseInt(input, 10);
      if(!isNaN(number)){
        try{
          setInput(factorial(number).toString());
        }
        catch(e){
          setInput('Error');
        }

      }else {
        setInput('Error')
      }
      return;
    }



    if(value === 'log'){
      const number = parseFloat(input);
      if(!isNaN(number)){
        try{
          setInput(log10(number).toString())
        }
        catch{
          setInput('Error');
        }
      }
      else{
        setInput('Error')
      }
      return;
    }

    if(value === 'ln'){
      const number = parseFloat(input);
      if(!isNaN(number)){
        try{
          setInput(log(number).toString())
        }
        catch{
          setInput('Error');
        }
      }
      else{
        setInput('Error')
      }
      return;
    }
    

    //delete the last char
    if (value === 'DEL'){
      try{
        setInput(input.slice(0, -1));
      }
      catch(e){
        setInput('Error');
      }
      return;
    }          

    //clear console calculator
    if(value === 'AC'){
      setInput('');
      setAns('');
      return 0;
    }   

    if (value === '*'){
      setInput(input + '*')
      return ;
    }

    if (value === '/'){
      setInput(input + '/')
      return;
    }

    if (value === '-'){
      setInput(input + '-')
      return;
    }

    if (value === '+'){
      setInput(input + '+')
      return;
    }

    if (value === '.'){
      setInput(input + '.')
      return;
    }

    if (value === '('){
      setInput(input + '(')
      return;
    }

    if (value === ')'){
      setInput(input + ')')
      return;
    }


    if (value === 'EXP') {
      setInput(input + 'e');
      return;
    }

    if (value === 'Ans') {
      setInput(input + ans);
      return;
    }

    if(value === '='){
      try{
        if (/e(?!\d)/.test(input)) {
          setInput('Syntax Error');
          return;
        }
        const result = evaluate(input);
        setInput(result.toString());
        setAns(result.toString());
      }
      catch{
        setInput('Error');
      }
      return;
    }


      setInput(input + value);
  };
  return( 
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{ans}</div>
          <div className="current-operand">{input}</div>
        </div>

        <div className="calculations-pad">

          <div className="row">
            <button value="(" onClick={handclick}>(</button>
            <button value=")" onClick={handclick}>)</button>
          </div>
          
          <div className="row">
            <button value="sin" onClick={handclick}>sin</button>
            <button value="cos" onClick={handclick}>cos</button>
            <button value="tan" onClick={handclick}>tan</button>
          </div> 
            
          <div className="row">
            <button value="x⁻¹" onClick={handclick}>x⁻¹</button>
            <button value="x²" onClick={handclick}>x²</button>
            <button value="x³" onClick={handclick}>x³</button>
          </div>

          <div className="row">
            <button value="√" onClick={handclick}>√</button>
            <button value="^" onClick={handclick}>^</button>
            <button value="%" onClick={handclick}>%</button>
          </div>  

          <div className="row">
            <button value="x!" onClick={handclick}>x!</button>
            <button value="log" onClick={handclick}>log</button>
            <button value="ln" onClick={handclick}>ln</button>
          </div>

        </div>

        <div className="num-pad">
          <div className="row-nums">  
            <button value="7" onClick={handclick}>7</button>
            <button value="8" onClick={handclick}>8</button>
            <button value="9" onClick={handclick}>9</button>
            <button id="red-button" value="DEL" onClick={handclick}>DEL</button>
            <button id="red-button" value="AC" onClick={handclick}>AC</button>
          </div> 

          <div className="row-nums"> 
            <button value="4" onClick={handclick}>4</button>
            <button value="5" onClick={handclick}>5</button>
            <button value="6" onClick={handclick}>6</button>
            <button value="*" onClick={handclick}>*</button>
            <button value="/" onClick={handclick}>/</button>
          </div>  

          <div className="row-nums"> 
            <button value="1" onClick={handclick}>1</button>
            <button value="2" onClick={handclick}>2</button>
            <button value="3" onClick={handclick}>3</button>
            <button value="+" onClick={handclick}>+</button>
            <button value="-" onClick={handclick}>-</button>
          </div>  

          <div className="row-nums"> 
            <button value="0" onClick={handclick}>0</button>
            <button value="." onClick={handclick}>.</button>
            <button value="EXP" onClick={handclick}>EXP</button>
            <button value="Ans" onClick={handclick}>Ans</button>
            <button value="=" onClick={handclick}>=</button>
          </div>  
          
        </div>
      </div>
  )
}

export default App;
