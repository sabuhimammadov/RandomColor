import React, { useState } from 'react';
import styles from "./ColorCard.module.css";
import { GetRandomColor } from '../../utils';

export function ColorCard({ color, arr }) {
    // console.log("arr",arr)
    const [backgroundColor, setBackgroundColor] = useState(color);

    const handleRandomColor = () => {
        const randomColor = GetRandomColor(arr);
        setBackgroundColor(randomColor);
    };

    return (
        <div
            className={styles.card}
            style={{ backgroundColor: backgroundColor }}
            onClick={handleRandomColor}
        >
        </div>
    );
}
