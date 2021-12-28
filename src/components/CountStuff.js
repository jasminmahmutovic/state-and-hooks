import { useState, useEffect } from "react";

const CountStuff = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    };

    const decreaseCount = () => {
        if(count !== 0){
            setCount(count - 1);
        }
    };

    const decreaseByTen = () => {
        if(count !== 0){
            setCount(count - 10);
        }
    };

    const increaseByTen = () => {
        setCount(count + 10)
    };

    useEffect(() => {
        console.log("Working");
    }, [count])

    return ( 
    <>
        <h2>I count stuff</h2>
        <p>{count}</p>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={decreaseByTen}>Decrease by 10</button>
        <button onClick={increaseByTen}>Increase by 10</button>
    </>
    );
};

export default CountStuff;