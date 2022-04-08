import { useState } from "react";
import Display from "./Display";
import KeyPad from './KeyPad'

function Calculator() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["/", "*", "+", "-", "."];

    const updateCalc = (val) => {
        if (
            (ops.includes(val) && calc === "") ||
            (ops.includes(val) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + val);
        if (!ops.includes(val)) {
            setResult(calculateStr(calc + val).toString());
        }
    };

    const calculateStr = (equation) => {
        return new Function("return " + equation)();
    };

    return (
        <div>
            <h1>Calculator</h1>
            <div className="calculator">
                <Display result={result} calc={calc} />
                <KeyPad setCalc={setCalc} calc={calc} setResult={setResult} result={result} updateCalc={updateCalc} />
            </div>
        </div>
    );
}

export default Calculator;
