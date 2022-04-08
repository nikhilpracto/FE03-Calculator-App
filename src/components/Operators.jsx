const Operators = ({ setCalc, calc, setResult, updateCalc }) => {
    const deleteLast = () => {
        if (calc === "") return;
        const val = calc.slice(0, -1);
        setCalc(val);
    };

    const clearScreen = () => {
        setCalc("");
        setResult("");
    };

    return (
        <div className="operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>

            <button onClick={() => deleteLast()}>
                <img
                    src="https://img.icons8.com/ios/30/000000/clear-symbol--v1.png"
                    alt="delete last char"
                />
            </button>
            <button onClick={() => clearScreen()}>Clear</button>
        </div>
    )
};

export default Operators;
