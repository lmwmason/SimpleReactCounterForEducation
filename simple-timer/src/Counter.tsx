import React, { useState, useEffect } from "react";
import './Counter.css';

const increaseSound = new Audio('./Sound.mp3');
const decreaseSound = new Audio('./Sound.mp3');

const Counter = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState<'increase' | 'decrease' | null>(null);

    useEffect(() => {
        if (lastAction === 'increase') {
            increaseSound.currentTime = 0;
            increaseSound.play();
        } else if (lastAction === 'decrease') {
            decreaseSound.currentTime = 0;
            decreaseSound.play();
        }
        setLastAction(null);
    }, [count]);

    const onIncrease = () => {
        setCount(prevCount => prevCount + 1);
        setLastAction('increase');
    };

    const onDecrease = () => {
        setCount(prevCount => prevCount - 1);
        setLastAction('decrease');
    };

    const countClass = count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero';

    return (
        <div className="Counter-Container">
            <h1 className="Counter-Title neon-text">
                SIMPLE COUNTER FOR EDUCATION
            </h1>
            <div className={`Counter-Display ${countClass}`}>
                <span className="neon-glow">{count}</span>
            </div>
            <div className="Button-Container">
                <button
                    onClick={onDecrease}
                    className="neon-button decrease-button"
                >
                    &lt; MINUS
                </button>
                <button
                    onClick={onIncrease}
                    className="neon-button increase-button"
                >
                    PLUS &gt;
                </button>
            </div>
        </div>
    );
};

export default Counter;