const Digits = ({ setCalc, calc, setResult, updateCalc }) => {
    const calculateStr = (equation) => {
        return new Function("return " + equation)();
    };

    const createDigits = () => {
        const digits = [];
        for (let d = 1; d < 10; d++) {
            digits.push(
                <button onClick={() => updateCalc(d.toString())} key={d}>
                    {d}
                </button>
            );
        }
        return digits;
    };

    const calculate = () => {
        setCalc(calculateStr(calc).toString());
    };

    return (
        <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>

            <button onClick={calculate}>=</button>
        </div>
    );
};

export default Digits;