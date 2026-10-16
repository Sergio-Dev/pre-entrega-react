import styles from './ItemTeam.module.css'

function ItemTeam({name, role, email, imgUrl }){

    return(
        <>
            <div className={styles.itemMember}>
                <img src={imgUrl} alt={name} />
                <span className={styles.memberName}>{name}</span>
                <span className={styles.memberRole}>{role}</span>
                <span className={styles.memberEmail}>{email}</span>
            </div>
        </>
    )
}

export default ItemTeam