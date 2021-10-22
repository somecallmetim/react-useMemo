import { useState } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = slowFunction(number);
    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };
    return (
        <>
            <input
                type='number'
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}

export default App;
