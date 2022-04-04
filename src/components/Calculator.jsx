import React from 'react'

class Calculator extends React.Component {
    constructor(props){
        super(props);

    }

    createDigits = () => {
        const digits = [];
        for(let d=1;d<10;d++) {
            digits.push(
                <button key={d}>{d}</button>
            )
        }
        return digits;
    }

    render() {
        return (
            <div>
                <h1>Calculator</h1>
            <div className="calculator">
                <div className="display">
                    <span>(0) </span> 0
                </div>

                <div className="operators">
                    <button>/</button>
                    <button>*</button>
                    <button>+</button>
                    <button>-</button>

                    <button>DEL</button>
                </div>

                <div className='digits'>
                    { this.createDigits() }
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </div>
            </div>
        )
    }
};

export default Calculator;