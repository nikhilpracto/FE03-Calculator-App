import Digits from "./Digits";
import Operators from "./Operators";

const KeyPad = ({ setCalc, calc, setResult, updateCalc }) => {
    return (
        <div>
            <Operators setCalc={setCalc} calc={calc} setResult={setResult} updateCalc={updateCalc} />
            <Digits setCalc={setCalc} calc={calc} setResult={setResult} updateCalc={updateCalc} />
        </div>
    );
}

export default KeyPad;