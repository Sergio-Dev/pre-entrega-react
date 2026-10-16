import styles from './Footer.module.css'
import TeamContainer from '../Team/TeamContainer/TeamContainer'

function Footer(){

    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.team}>
                        <TeamContainer message="Nuestro Equipo" />
                    </div>
                </div>

                <div className={styles.copy}>
                    &copy; 2026 Remix. Remeras Personalizadas. Todos los derechos reservados.
                </div>
            </footer>
        </>
    )
}

export default Footer