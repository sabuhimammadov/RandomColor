import React from 'react';
import styles from "./ColorList.module.css";
import { ColorCard } from '../ColorCard';

export function ColorList({ colorArr }) {
    
    const data = colorArr?.map((color, index,data) => (
        < ColorCard key={index} color={color} arr={data} />
    ));

    return (
        <div className={styles.cardList}>
            {data}
        </div>
    );
}
