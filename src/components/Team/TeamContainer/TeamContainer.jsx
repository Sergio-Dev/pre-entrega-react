import { useEffect, useState } from "react"
import TeamList from "../TeamList/TeamList"
import styles from './TeamContainer.module.css'

function TeamContainer({message}){
    const [team, setTeam] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/data/team.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('No se pudo cargar la información del equipo');
                }
                return res.json();
            })
            .then((data) => {
                setTeam(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando equipo...</p>;
    }

    if (error) {
        return <p>Error Team: {error}</p>;
    }

    return(
        <>
            <h2>{message}</h2>
            <div className={styles.TeamContainer}>
                <TeamList team={team} />
            </div>
        </>
    )
}

export default TeamContainer