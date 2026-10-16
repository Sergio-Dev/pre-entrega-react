import { useEffect, useState } from "react"
import ProductList from "../ProductList/ProductList"
import styles from './ProductListContainer.module.css'

function ProductListContainer({message}){
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/data/products.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return(
        <>
            <h2 className={styles.productsTitle}>{message}</h2>
            <p className={styles.productsText}>Descubrí los diseños destacados y las prendas más elegidas por nuestros clientes.</p>
            <div className={styles.ProductListContainer}>
                <ProductList products={products} />
            </div>
        </>
    )
}

export default ProductListContainer