import styles from './Header.module.css'

function Header(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.logoTitle}>Remix<span>.</span></h1>
                    <p className={styles.logoText}>remeras Personalizadas</p>
                </div>
                
                <nav className={styles.nav}>
                    <a className={styles.linkActive} href="">Inicio</a>
                    <a href="">Productos</a>
                    <a href="">Nosotros</a>
                    <a href="">Contacto</a>
                </nav>

                <div className={styles.iconContainer}>
                    <div className={styles.iconContainerFavorite}>
                        <i className="fa-regular fa-star"></i>
                        <a href="">Favoritos</a>
                    </div>

                    <div className={styles.iconContainerCart}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <a href="">Carrito</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header