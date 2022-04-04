// import React from 'react'
import { useState } from 'react';

function Calculator()  {
    // constructor(props){
    //     super(props);
    //     this.state = { }
    // }

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = val => {
        if(
            (ops.includes(val) && calc==='') || 
            (ops.includes(val) && ops.includes(calc.slice(-1)))
        ){
            return;
        }
        setCalc(calc+val);
        if(!ops.includes(val)){
            setResult(eval(calc+val).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if(calc==='') return;
        const val = calc.slice(0, -1);
        setCalc(val);
    }

    const createDigits = () => {
        const digits = [];
        for(let d=1;d<10;d++) {
            digits.push(
                <button onClick={()=>updateCalc(d.toString())} key={d}>{d}</button>
            )
        }
        return digits;
    }

    const clearScreen = () =>{
        setCalc('');
    }

    // render () {
        return (
            <div>
                <h1>Calculator</h1>
            <div className="calculator">
                <div className="display">
                    { result ? <span>({result}) </span> : ''} &nbsp; { calc || "0"}
                </div>

                <div className="operators">
                    <button onClick={()=>updateCalc('/')}>/</button>
                    <button onClick={()=>updateCalc('*')}>*</button>
                    <button onClick={()=>updateCalc('+')}>+</button>
                    <button onClick={()=>updateCalc('-')}>-</button>

                    <button onClick={()=>deleteLast()}><img src="https://img.icons8.com/ios/30/000000/clear-symbol--v1.png" alt="delete last char"/></button>
                    <button onClick={()=>clearScreen()}>Clear</button>
                </div>

                <div className='digits'>
                    { createDigits() }
                    <button onClick={()=>updateCalc('0')}>0</button>
                    <button onClick={()=>updateCalc('.')}>.</button>

                    <button onClick={calculate}>=</button>
                </div>
            </div>
            </div>
        )
    // }
};

export default Calculator;
