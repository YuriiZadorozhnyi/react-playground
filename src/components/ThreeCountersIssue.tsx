import { useState, memo } from 'react';

function Test() {
    const [counter, setCounter] = useState(0);
    console.log('render....');

    function incrementBy3() {
        setCounter((previousValue) => previousValue + 1);
        setCounter((previousValue) => previousValue + 1);
        setCounter((previousValue) => previousValue + 1);
    }

    return (
        <div>
            <div>Test... {counter}</div>
            <button
                onClick={() => {
                    incrementBy3();
                }}
            >
                increment...
            </button>
        </div>
    );
}

export default memo(Test);
