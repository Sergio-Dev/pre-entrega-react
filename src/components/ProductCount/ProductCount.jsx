import { useState } from 'react'
import styles from './ProductCount.module.css'

function ProductCount(){

    const [counter, setCounter] = useState(0)

    const increment = ()=>{
        setCounter(counter + 1)
    }

    const decrement =()=>{
        setCounter(counter - 1)
    }

    return(
        <>
            <button className={styles.buttonCount} onClick={decrement}>-</button>
            <span className={styles.counterNumber}>{counter}</span>
            <button className={styles.buttonCount} onClick={increment}>+</button>
        </>
    )
}

export default ProductCount