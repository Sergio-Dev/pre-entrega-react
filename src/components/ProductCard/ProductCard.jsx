import styles from './ProductCard.module.css'
import { useState } from 'react'

function ProductCard({imgUrl, name, price, stock}){

    const [counter, setCounter] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)

    const increment = ()=>{
        if (counter < stock) {
		    setCounter(counter + 1)
        }
    }

    const decrement =()=>{
        if(counter > 0){
            setCounter(counter - 1)
        }
    }
    
    const toggleFavorite = ()=>{
        setIsFavorite(!isFavorite)
    }

    const addCart =()=>{
        alert(`Agregaste ${counter} unidades de ${name} al carrito` )
    }

    return(
        <>
            <article className={styles.card}>
                <span className={styles.fovoriteContainer} onClick={toggleFavorite}>
                    {isFavorite ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                </span>

                <div className={styles.imgContainer}>
                    <img 
                        src={imgUrl} 
                        alt={name} 
                        className={styles.imgCard}
                    />
                </div>
                
                <div className={styles.contentCard}>
                    <h3 className={styles.nameCard}>{name}</h3>
                    <span><small>Stock: {stock}</small></span>
                    <p className={styles.priceCard}>
                        ${price.toLocaleString("es-Ar")}
                    </p>

                    <div className={styles.buttonsContainer}>
                        <div className={styles.buttonsCounterContainer}>
                            <button className={styles.buttonCountIncrement} onClick={decrement}><i className="fa-solid fa-minus"></i></button>
                            <span className={styles.counterNumber}>{counter}</span>
                            <button className={styles.buttonCountDecrement} onClick={increment}><i className="fa-solid fa-plus"></i></button>
                        </div>

                        <button
                            disabled={counter === 0}
                            onClick={addCart}
                            className={styles.buttonCard}>
                            <i className="fa-solid fa-cart-plus"></i>Comprar
                        </button>
                    </div>
                    
                </div>
            </article>
        </>
    )
}

export default ProductCard