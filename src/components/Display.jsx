const Display = ({ result, calc }) => {
    return (
        <div className="display">
            {result ? <span>({result}) </span> : ""} &nbsp; {calc || "0"}
        </div>
    )
};

export default Display;